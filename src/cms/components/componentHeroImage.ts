import { ComponentAsset } from './componentAsset';

export const ComponentHeroImage = `
  fragment ComponentHeroImage on ComponentHeroImage {
    title
    subtitle
    image {
      ...ComponentAsset
    }
  }

  ${ComponentAsset}
`;
