import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    padding:30px 15px;
    color: ${({ theme }) => theme.colors.main};
    border-bottom: 3px solid transparent;
    transition: all 500ms ease;
	text-decoration: none;
	text-transform: uppercase;

	&:hover {
		border-bottom: 3px solid ${({ theme }) => theme.colors.accent};
		color: ${({ theme }) => theme.colors.accent};
	}
`

const ButtonLink = styled(StyledLink)`
    text-align: center;
    padding: 1em 2em;
    margin: 30px auto 0;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.main};
    font-size: .9em;
    letter-spacing:1px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: .4em;
    border: none;
    transition: background-color 500ms ease, color 500ms ease;

    &:hover{
        background-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.main};
        border: none;
    }
`
const HeroLink = styled(ButtonLink)`
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.light};
    margin: 0 auto 0 0;
    
    &:hover{
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.main};
        border: none;
    }
`

const Button = styled.a`
    text-align: center;
    padding: 1em 2em;
    margin: 0 10px 10px 0;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.light};
    font-size: .9em;
    letter-spacing:1px;
    max-width: 220px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: .4em;
    border: none;
    transition: background-color 500ms ease, color 500ms ease;

    &:hover{
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.main};
    }
`



const TextButton = styled(ButtonLink)`
    padding: 1em 2em 1em 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
    text-transform: initial;
    font-style: italic;
    font-weight: bold;
    cursor: pointer;

    svg{
        margin-left:5px;
        transition: margin-left 500ms ease;
    }

    &:hover{
        background-color: transparent;
        color: ${({ theme }) => theme.colors.accent};

        svg{
            margin-left:10px;
        }
    }
`
const LightButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.main};
`

const CenteredButton = styled(LightButton)`
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 40px auto 0;
`

const AccentButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.main};

    &:hover{
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.main};
    }
`;

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

    @media (max-width: 660px){
        font-size:1.6em;
    }
`;

const TitleCv = styled(Title)`
    font-size: 1.4em;
`;

const WhiteTitle = styled(Title)`
    color:  ${({ theme }) => theme.colors.white};
    @media (max-width: 660px){
        font-size:1.6em;
    }
`;

const Figure = styled.figure`
    padding:10px;
    border-radius: 20px;
    margin-top: 80px;
    background-color: ${({ theme }) => theme.colors.accent};
    width: 100%;

    img{
        border-radius: 10px;
        margin-top: -80px;
        box-shadow: 0 0 30px rgba(8,57,73, .3);
        width: 100%;
        object-fit: cover;
        min-height: 333px;
    }
        
`

const TrabajoFigure = styled(Figure)`
    background-color: ${({ theme }) => theme.colors.secondary};
`
const BlogFigure = styled(Figure)`
    background-color: ${({ theme }) => theme.colors.neutralLight};
`


export { Button, LightButton, TextButton, CenteredButton, AccentButton, Title, TitleCv, WhiteTitle, Figure, TrabajoFigure, BlogFigure, StyledLink, ButtonLink, HeroLink }