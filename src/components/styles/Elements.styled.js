import styled from "styled-components";

const StyledButton = styled.button`
    padding: .7em 2em;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.light};
    font-size: 1em;
    text-transform: uppercase;
    border-radius: .4em;
`

const Title = styled.h2`
    color:  ${({ theme }) => theme.colors.white};
	position: relative;
	width: max-content;
	text-transform: uppercase;
    z-index: 1;
    background-color:${({ theme }) => theme.colors.main};

    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height:10px;
        bottom: 1px;
        background-color: ${({ theme }) => theme.colors.secondary};
        opacity: .6;
    } 
	
`

export { StyledButton, Title }