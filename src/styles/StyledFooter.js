import styled from "styled-components";

export const StyledFooter = styled.div`
  color: #f4f4f4;
  background-color: #001933;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  p {
    display: inline-block;
    padding: 0 0.5rem;
    span {
      color: #fce9e9;
      font-weight: 600;
      font-size: 1.4rem;
    }
  }
  span {
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .giticon {
    cursor: pointer;
    font-size: 1.8rem;
    margin-left: 0.5rem;
    color: white;
    transition: color 0.3s ease;
    :hover {
      color: #dd2222;
    }
  }
`;
