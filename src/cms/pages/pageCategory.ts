import {
  ComponentAsset,
  ComponentMetatags,
  ComponentPageBuilder,
} from 'cms/components';

export const PageCategory = `
  query PageCategory($slug: String!) {
    pageCategoryCollection(where: { slug: $slug }, limit: 1) {
      items {
        slug
        title
        subtitle
        metatags {
          ...ComponentMetatags
        }
        thumbnail {
          ...ComponentAsset
        }
        pageBuilder {
          ...ComponentPageBuilder
        }
      }
    }
  }

  ${ComponentMetatags}
  ${ComponentAsset}
  ${ComponentPageBuilder}
`;
