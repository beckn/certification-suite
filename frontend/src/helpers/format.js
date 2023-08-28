export const validateResponseWithFormat = (response, format) => {
  const errors = [];

  const validateFields = (responseFields, formatFields, path = []) => {
    for (const field in responseFields) {
      if (!formatFields.hasOwnProperty(field)) {
        errors.push(`Field "${[...path, field].join('.')}" is not expected in format`);
        continue;
      }

      const expectedValue = formatFields[field];
      const actualValue = responseFields[field];

      if (typeof expectedValue === 'object') {
        if (typeof actualValue === 'object' && actualValue !== null) {
          validateFields(actualValue, expectedValue, [...path, field]);
        } else {
          errors.push(`Field "${[...path, field].join('.')}" should be an object`);
        }
      } else if (Array.isArray(expectedValue)) {
        if (Array.isArray(actualValue)) {
          const arrayItemFormat = expectedValue[0];
          for (let i = 0; i < actualValue.length; i++) {
            if (typeof arrayItemFormat === 'object') {
              validateFields(actualValue[i], arrayItemFormat, [...path, field, i]);
            }
          }
        } else {
          errors.push(`Field "${[...path, field].join('.')}" should be an array`);
        }
      }
    }
  };

  validateFields(response, format);

  if (errors.length > 0) {
    console.log('Validation Errors:');
    for (const error of errors) {
      console.log(error);
    }
    return false;
  }

  return true;
};

