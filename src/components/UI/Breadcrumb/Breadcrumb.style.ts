import styled from "@emotion/styled";

export const SLayout = styled.div``;

export const SHeader = styled.header`
  ul {
    font-size: 12px;
    list-style: none;
  }
  li:hover {
    color: blue;
    text-decoration: underline;
  }
  select {
    border: none;
    outline: none;
  }

  > div {
    display: flex;
    flex-wrap: wrap;

    padding: 10px 20px;

    > #searchCategories {
      order: 1;
      width: 100px;
    }

    > .gnb-menu.clearFix {
      order: 2;
      flex-grow: 1;

      display: flex;
      > li {
        padding: 7px 14px 0;
      }
    }

    > #breadcrumb {
      order: 3;
      flex-grow: 1;

      display: flex;
      gap: 5px;

      border-top: 1px solid #ddd;
      padding-top: 8px;
      margin: 0;
    }
  }
`;
