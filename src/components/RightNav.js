import styled from 'styled-components';
import { StyledLink } from './styles/Elements.styled';

const Ul = styled.ul`
    width: 30%;
	display: flex;
	justify-content: flex-end;
	li{
		display: flex;
	}

@media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.main};
    
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 3.5rem 0 2rem;
    transition: transform 0.3s ease-in-out;
    
    a{
        color: ${({ theme }) => theme.colors.white};
        width: 100%; 
        padding: 30px 30px; 
    }
}
`;

export default function RightNav({ open, setOpen }) {

    return (
        <Ul open={open}>
            <li><StyledLink onClick={() => setOpen(!open)} className="nav-link" to="/">Inicio</StyledLink></li>
            <li><StyledLink onClick={() => setOpen(!open)} className="nav-link" to="/portfolio">Proyectos</StyledLink></li>
            <li><StyledLink onClick={() => setOpen(!open)} className="nav-link" to="/cv">CV</StyledLink></li>
            <li><StyledLink onClick={() => setOpen(!open)} className="nav-link" to="/blog">Blog</StyledLink></li>
        </Ul>
    )
}
