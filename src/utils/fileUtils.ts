export const getAssetType = (contentType: string): string => {
  if (contentType.toLowerCase().startsWith('image')) return 'image';

  return contentType;
};

export const getExtension = (fileName: string): string => {
  const splitedFileName = fileName.split('.');
  return splitedFileName[splitedFileName.length - 1].toLowerCase();
};

export const fileToBase64Async = (
  file: File,
): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = reject;
    fileReader.readAsDataURL(file);
  });
