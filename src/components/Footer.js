import { FooterContainer, StyledFooter } from './styles/Layout.styled';
import Social from './Social';

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContainer>
                <Social />
                <span>Diseñado y construido por Asarael Navarro.</span>
            </FooterContainer>
        </StyledFooter>

    )
}
