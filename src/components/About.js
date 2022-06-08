import React from 'react';
import { WhiteTitle } from './styles/Elements.styled';

import { ContainerFluid, Container } from './styles/Layout.styled';

export default function About() {
    return (
        <ContainerFluid>
            <Container>
                <WhiteTitle>Sobre mi</WhiteTitle>
                <p>Hola, yo soy Asarael Navarro. Inicié mi carrera profesional como diseñador gráfico, pero con el tiempo, mi curiosidad y mi gusto por la tecnología me
                    llevó al camino del diseño web y tiempo después al de frontend developer. Actualmente, estoy comenzando una travesía para convertirme en fullstack
                    developer y cumplir el sueño de mi yo adolescente, construir cosas que parecen funcionar por arte de magia. La mayor parte de mi aprendizaje en las
                    tecnologías web ha sido de manera autodidacta y estoy constantemente retándome a aprender cosas nuevas y actualizar mis conocimientos. Actualmente estoy
                    en busqueda de una oportunidad para trabajar en una compañía donde pueda poner en práctica mi experiencia y donde pueda crecer y seguir aprendiendo.</p>
            </Container>
        </ContainerFluid>
    )
}
