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
    .setupform{
      label{
        padding:0 3rem !important;
      }
    }
  }

  @media (max-width: 500px) {


    html{
        font-size:45%;
    }
    .header{
      height:5vh;
    }
    .headertop{
      align-items:center !important;
    }

    .weather{
        transform:translateX(.05rem);
        font-size:1.5rem;
        position: absolute;
        right:1vw;
        top:20vh;
    
    }
    .mainbody{
        padding:5rem 0;
    }
    .nav{
        width:15vw;
        font-size:1rem;
        left:3vw;
        top:20vh;      
        .li{
          span::before{
            margin-left: 0rem;
          }
        }
    }
    .categoryadder{
      padding-right:5rem;
    }
    .mapped{
       width:60vw; 
       margin-left:0;
       margin-left:15vw;
    } 






    .wrap{
      font-size:1.5rem;
      h2{
        font-size:2rem !important;
      }
    }
    .setupform{
      padding:1rem;

    .row{

      align-items:center;
    }
      input[type='text']{
        padding:1rem 2rem;

      }
      
      label{
        padding:0 2rem !important;
      }
    }

  }

`;
