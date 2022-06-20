import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import variables from "./variables";

const GlobalStyles = createGlobalStyle`

${reset};
${variables};

html,body,#root{
    width: 100%;
    min-height: 100vh;
}
footer {
  position: sticky;
  top: 100vh;
}
body{
    font-size: 17px;
    font-family: 'Mulish', sans-serif;
    color: ${({ theme }) => theme.colors.main};
    background-image: repeating-linear-gradient(to right, rgba(8,57,73, .05), rgba(8,57,73, .1) 1px, transparent 1px, transparent);
    background-size: 100px 100px;
}

h1,h2,h3,h4{
    font-family: 'Asap', sans-serif;
    font-weight: 700;
    margin-bottom: 15px;
    line-height:1.3em;
}

h1{
    font-size: 4em;
}
h2{
    font-size: 2em;
}
h3{
    font-size: 1.8em;
}

h4{
    font-size:1.4em;
}
p{
    margin-bottom: 20px;
    line-height:1.3;
}
img{
    width: 100%;
}

@media (max-width: 660px){
    h2{
        font-size: 1.2em;
    }
    h4{
    font-size:1.1em;
}
}
`;


export default GlobalStyles