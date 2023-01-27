export const camelToSnakeCase = (string: string): string =>
  string.replace(/([A-Z])/g, (char) => `_${char.toLowerCase()}`);

export const capitalize = (string: string): string =>
  string.replace(
    /(.?)(.*)/g,
    (match, char, rest) => `${char.toUpperCase()}${rest}`,
  );

export const snakeToCamelCase = (string: string): string =>
  string.replace(/_(.?)/gm, (char) => char[1].toUpperCase());
