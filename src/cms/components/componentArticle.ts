import { ComponentAsset } from './componentAsset';

export const ComponentArticle = `
  fragment ComponentArticle on PageArticle {
    title
    subtitle
    thumbnail {
      ...ComponentAsset
    }
  }

  ${ComponentAsset}
`;
