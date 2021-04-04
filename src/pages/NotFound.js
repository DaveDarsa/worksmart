import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return <Styled404>Nothing Here(404)</Styled404>;
};
export default NotFound;

const Styled404 = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-size: 10rem;
  text-align: center;
  user-select: none;
  line-height: 100vh;
`;
