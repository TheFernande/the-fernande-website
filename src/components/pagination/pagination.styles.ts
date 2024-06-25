import { css, styled } from "styled-components";

import { theme } from "@/styles/theme";

const PaginationStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 96px;
  background-color: ${theme.colors.pink.light};
`;

const Pagination = styled.div`
  ${PaginationStyles}
`;

export { Pagination };
