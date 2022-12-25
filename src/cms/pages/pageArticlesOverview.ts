import { ComponentArticle } from 'cms/components';

export const PageArticlesOverview = `
  query PageArticlesOverview($skip: Int, $limit: Int) {
    pageArticleCollection(skip: $skip, limit: $limit) {
      total
      skip
      limit
      items {
        ...ComponentArticle
      }
    }
  }

  ${ComponentArticle}
`;
