import styled from "styled-components";

const Button = styled.button`
    padding: .7em 2em;
    margin: 0 10px 10px 0;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.light};
    font-size: 1em;
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
        background-color: ${({ theme }) => theme.colors.secondary};
        opacity: .5;
    } 
	
`
const WhiteTitle = styled(Title)`
    color:  ${({ theme }) => theme.colors.white};
`;

export { Button, LightButton, Title, WhiteTitle }