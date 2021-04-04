import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body::-webkit-scrollbar {
  width: 0.5rem;
}
body::-webkit-scrollbar-thumb {
  background-color: rebeccapurple;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scrollbar-track-color: azure;
}
* {
  font-size: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

    @media (max-width: 768px) {
    html{
        font-size:50%;
    }

    .weather{
        transform:translateX(-1.5rem);
        font-size:1.5rem;
    
    }
    .mainbody{
        padding: 5rem 5vw;
    }
    .nav{
        width:10vw;
        font-size:1rem;
        left:15vw;
    }
    .mapped{
        width:50vw;
 
    }
  }

`;
