import React from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Ul = styled.ul`
position: fixed;
display:  flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 40px;
position: fixed;
bottom: 0px;
right: 40px;
left: auto;
z-index: 10;

&:after {
    content: '';
    display: block;
    width: 1px;
    height: 100px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

a{
    padding: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.2em;
    display: inline-block;
    transition: color 500ms ease,transform 500ms ease ;

    &:hover {
        color: ${({ theme }) => theme.colors.accent};
        transform: translateY(-3px);
    }
}

@media (max-width: 1345px){
    position: relative;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    right:0;

    &:after {
    height: 0;
    margin:0;
    left:0;
    }
    
    a{
        padding: 20px;
    }
}
`;
export default function Social() {
    return (
        <Ul>
            <li>
                <a className="contact__link mail" href="mailto:asarael.navarro@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={solid('envelope')} />
                </a>
            </li>
            <li>
                <a className="contact__link behance" href="https://www.linkedin.com/in/asarael-navarro/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('linkedin')} />
                </a>
            </li>
            <li>
                <a className="contact__link behance" href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('behance')} />
                </a>
            </li>
            <li>
                <a className="contact__link github" href="https://github.com/AsaraelNavarro/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('github')} />
                </a>
            </li>
        </Ul>
    )
}
