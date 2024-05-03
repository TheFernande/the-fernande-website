import { css, styled } from "styled-components";

const containerStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: white;
  color: black;
  font-size: 16px;
  font-weight: 400;
`;

const Container = styled.div`
  ${containerStyles}
`;

export { Container };
