export const getAssetType = (contentType: string): string => {
  if (contentType.toLowerCase().startsWith('image')) return 'image';

  return contentType;
};
