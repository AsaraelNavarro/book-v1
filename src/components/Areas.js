import React from 'react';
import { WhiteTitle, AccentButton, TrabajoFigure } from './styles/Elements.styled';
import { ContainerFluid, Container, Grid, ArticleLeftColumn, ArticleRightColumn } from './styles/Layout.styled';

export default function Areas() {
    return (
        <ContainerFluid>
            <Container>
                <WhiteTitle>otras áreas de trabajo</WhiteTitle>
                <Grid>
                    <ArticleLeftColumn>
                        <TrabajoFigure>
                            <a href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                                <img src="./diseno-web.jpg" alt="Avatar Asarael Navarro Beltrán" />
                            </a>
                        </TrabajoFigure>
                        <div>
                            <a href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                                <h3>Diseño web</h3>
                            </a>
                            <p>Hace 8 años comencé a diseñar páginas e interfaces web. Con el tiempo fuí aprendiendo las bases de UI/UX. Mis herramientas son Figma, la tipografía y la investgación.</p>

                            <AccentButton href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                                Mi portafolio
                            </AccentButton>
                        </div>
                    </ArticleLeftColumn>
                    <ArticleRightColumn>
                        <TrabajoFigure>
                            <a href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                                <img src="./diseno-grafico.jpg" alt="Avatar Asarael Navarro Beltrán" />
                            </a>
                        </TrabajoFigure>
                        <div>
                            <a href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                                <h3>Diseño gráfico</h3>
                            </a>
                            <p>Más de 9 años creando todo tipo de material gráfico para redes sociales e impresos. Mis herramientas son Illustrator y Photoshop.</p>

                            <AccentButton href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                                Mi portafolio
                            </AccentButton>
                        </div>
                    </ArticleRightColumn>
                </Grid>
            </Container>
        </ContainerFluid>
    )
}
