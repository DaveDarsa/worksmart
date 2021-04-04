import styled from "styled-components";

export const StyledHeader = styled.div`
  overflow: hidden;
  height: 10vh;
  font-size: 1.5rem;
  background-color: rgba(0, 25, 51, 1);
  color: #f4f4f4;
  font-family: "Lato", sans-serif;
  padding: 2rem 10rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 12px 10px solid black;
  .quote {
    display: inline-block;
    text-align: center;
    margin-top: 2rem;
    color: white;
    font-size: 1.5rem;
  }
  .headertop {
    padding: 0 15rem;
    display: flex;

    justify-content: space-between;
    align-items: baseline;
  }
  .userInfo {
    margin-left: 20vw;
    font-size: 1.8rem;
    span {
      text-overflow: ellipsis;
    }
  }
  .logo {
    font-size: 3rem;
    font-family: "Sansita", sans-serif;
    cursor: pointer;
    span {
      font-weight: 700;
      font-size: 3.5rem;
    }
  }
`;
