function sanitizeObject<T>(data: any, fields: (keyof T)[]): Partial<T> {
  const sanitizedData: Partial<T> = {};

  fields.forEach((field) => {
    if (data.hasOwnProperty(field)) {
      sanitizedData[field] = data[field];
    }
  });

  return sanitizedData;
}
export default sanitizeObject;
