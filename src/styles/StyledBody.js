import styled from "styled-components";

export const StyledBody = styled.div`
  background: linear-gradient(
      90deg,
      rgba(22, 22, 22, 0.5) 0%,
      rgba(22, 22, 22, 0.5) 100%
    ),
    url(${(props) => props.img}) top center no-repeat;

  min-height: 90vh;
  background-size: cover;
  background-attachment: scroll;
  padding: 5rem 20vw;

  .contents {
    padding: 5rem;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.9);
    margin-bottom: 5rem;
  }
  .weathertime {
    border: 1px solid black;
    position: relative;
  }
  /* .time {
    position: absolute;
    color: white;
    right: 0;

    font-size: 5rem;
    width: max-content;
  } */
`;
