import { ComponentCol } from './componentCol';

export const ComponentRow = `
  fragment ComponentRow on ComponentRow {
    title
    subtitle
    columnsCollection {
      items {
        ...ComponentCol
      }
    }
    colXs
    colSm
    colMd
    colLg
    colXl
    additionalClassname
  }

  ${ComponentCol}
`;
