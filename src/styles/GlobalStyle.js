import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

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
