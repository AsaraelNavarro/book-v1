import styled from "styled-components";

const Button = styled.a`
    padding: .7em 2em;
    margin: 0 10px 10px 0;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.light};
    font-size: 1em;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: .4em;
    border: none;
`
const LightButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.main};
`

const Title = styled.h2`
    color:  ${({ theme }) => theme.colors.main};
	position: relative;
	width: max-content;
	text-transform: uppercase;
    z-index: 1;

    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height:10px;
        bottom: 1px;
        background-color: ${({ theme }) => theme.colors.light};
        opacity: .5;
    } 
	
`
const WhiteTitle = styled(Title)`
    color:  ${({ theme }) => theme.colors.white};
`;

const Figure = styled.figure`
    padding:20px;
    border-radius: 20px;
    margin-top: 80px;
    background-color: ${({ theme }) => theme.colors.accent};
    width: 100%;

    img{
        border-radius: 10px;
        margin-top: -80px;
        box-shadow: 0 0 30px rgba(8,57,73, .3);
        width: 100%;
    }
        
`

export { Button, LightButton, Title, WhiteTitle, Figure }