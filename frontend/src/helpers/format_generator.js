

  const validateResponseWithFormat = (response, format) => {
    const responseKeys = Object.keys(response);
    const formatKeys = Object.keys(format);
  
    if (responseKeys.length !== formatKeys.length || !responseKeys.every((key, index) => key === formatKeys[index])) {
      return false;
    }
  
    for (const field in format) {
      if (format.hasOwnProperty(field)) {
        const expectedType = format[field];
        const fieldValue = response[field];
  
        if (Array.isArray(expectedType)) {
          if (!Array.isArray(fieldValue)) {
            return false;
          }
  
          const arrayItemFormat = expectedType[0];
  
          for (const item of fieldValue) {
            if (!validateField(item, arrayItemFormat)) {
              return false;
            }
          }
        } else if (typeof expectedType === 'object') {
          if (typeof fieldValue !== 'object' || fieldValue === null || Array.isArray(fieldValue)) {
            return false;
          }
  
          if (!validateResponseWithFormat(fieldValue, expectedType)) {
            return false;
          }
        } else {
          if (typeof fieldValue !== expectedType) {
            return false;
          }
        }
      }
    }
  
    return true;
  };
  