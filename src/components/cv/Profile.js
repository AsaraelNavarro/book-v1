import avatar from '../../images/perfil.jpg';
import styled from "styled-components";
import { TileContainer } from '../../components/styles/Layout.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Avatar = styled.article`
    display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding-bottom: 30px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.neutral};
	margin-bottom: 30px;

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 50%;
		margin-bottom: 30px;
		border: 5px solid  ${({ theme }) => theme.colors.light};
	}

	h1 {
        font-size:1.5em;
		padding-bottom: 10px;
	}

	small{
	}
`;

const Contact = styled.article`
    display: flex;
	flex-direction: column;

	a{
		color: ${({ theme }) => theme.colors.main};
		padding: 5px;
		transition: all 0.5s;

		&:hover {
			color: ${({ theme }) => theme.colors.accent};
			transform: translateX(5px);
		}

		svg {
			margin-right: 10px;
		}
	}
`;

export default function Profile() {
    return (
        <TileContainer>
            <Avatar>
                <img src={avatar} alt="Avatar Asarael Navarro Beltrán" />
                <h1>Asarael Navarro</h1>
                <small>El / He / Him - 38 años</small>
            </Avatar>
            <Contact>
                <a href="mailto:asarael.navarro@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={solid('envelope')} /> asarael.navarro@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/asarael-navarro/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('linkedin')} /> /asarael-navarro
                </a>
                <a href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('behance')} /> /asarael_navarro
                </a>
                <a href="https://github.com/AsaraelNavarro/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('github')} /> @AsaraelNavarro
                </a>
            </Contact>
        </TileContainer>
    )
}
