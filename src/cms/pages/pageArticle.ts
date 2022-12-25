import { useQuery } from 'react-query';

import contentfulClient from 'config/contentful';
import {
  ComponentMetatags,
  ComponentAsset,
  ComponentPageBuilder,
} from 'cms/components';

export const PageArticle = `
  query PageArticle($slug: String!) {
    pageArticleCollection(where: { slug: $slug }, limit: 1) {
      items {
        slug
        title
        subtitle
        categoriesCollection {
          items {
            slug
            title
          }
        }
        metatags {
          ...ComponentMetatags
        }
        attachmentsCollection {
          items {
            ...ComponentAsset
          }
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

export const pageArticleQuery = (variables: any): any =>
  contentfulClient({ query: PageArticle, variables });

export const usePageArticleQuery = (variables: any): any =>
  useQuery('PageArticle', pageArticleQuery(variables));
