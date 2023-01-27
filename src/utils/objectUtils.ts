import { camelToSnakeCase } from './stringUtils';

export const createFormData = (data: any): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key]?.forEach((item: any) => formData.append(`${key}[]`, item));
    } else formData.append(key, data[key]);
  });
  return formData;
};

export const camelToSnakeCaseKeys = (object: any = {}): any =>
  Object.keys(object).reduce((result, current) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    result[camelToSnakeCase(current)] = object[current];
    return result;
  }, {});
