import { ComponentRow } from './componentRow';

export const ComponentPageBuilder = `
  fragment ComponentPageBuilder on ComponentPageBuilder {
    title
    rowsCollection {
      items {
        ...ComponentRow
      }
    }
  }

  ${ComponentRow}
`;
