import { ComponentMetatags, ComponentPageBuilder } from 'cms/components';

export const PageHome = `
  query PageHome {
    pageHomeCollection(limit: 1) {
      items {
        title
        subtitle
        metatags {
          ...ComponentMetatags
        }
        pageBuilder {
          ...ComponentPageBuilder
        }
      }
    }
  }

  ${ComponentMetatags}
  ${ComponentPageBuilder}
`;
