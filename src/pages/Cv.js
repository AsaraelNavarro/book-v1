import React from 'react';
import { StyledMain, Container, Grid, ProfileColumn, JobColumn, TileContainer } from '../components/styles/Layout.styled';

import Profile from "../components/cv/Profile"
import JobList from "../components/cv/JobList"
import { TitleCv } from "../components/styles/Elements.styled"
import SectionCard from "../components/cv/SectionCard"
import Badge from "../components/cv/Badge"
export default function Cv() {

    return (
        <StyledMain>
            <Container>
                <Grid>
                    <ProfileColumn>
                        <Profile />
                        <TileContainer>
                            <TitleCv>Áreas de especialidad</TitleCv>
                            <div>
                                <Badge badgeTitle="Diseño gráfico" />
                                <Badge badgeTitle="Diseño web" />
                                <Badge badgeTitle="UI" />
                                <Badge badgeTitle="Desarrollo web" />
                            </div>
                        </TileContainer>
                        <TileContainer>
                            <TitleCv>Habilidades</TitleCv>
                            <div>
                                <Badge badgeTitle="Adobe Creative Suite" />
                                <Badge badgeTitle="HTML" />
                                <Badge badgeTitle="CSS" />
                                <Badge badgeTitle="SASS" />
                                <Badge badgeTitle="Javascript" />
                                <Badge badgeTitle="Git" />
                                <Badge badgeTitle="React Js básico" />
                                <Badge badgeTitle="Maquetación web" />
                                <Badge badgeTitle="Fotocomposición" />
                                <Badge badgeTitle="SEO" />
                                <Badge badgeTitle="Multimedia" />
                                <Badge badgeTitle="WordPress" />
                            </div>
                        </TileContainer>
                    </ProfileColumn>
                    <JobColumn>
                        <JobList />
                        <TileContainer>
                            <TitleCv>Educación</TitleCv>
                            <SectionCard
                                cardTitle="Universidad Autónoma de Coahuila"
                                dateStart="2008"
                                dateFinished="2013"
                                cardContent="Escuela de Artes Plásticas - Licenciatura en diseño gráfico."
                            />
                        </TileContainer>
                        <TileContainer>
                            <TitleCv>Actualmente aprendiendo</TitleCv>
                            <div>
                                <Badge badgeTitle="React Js" />
                                <Badge badgeTitle="Node Js" />
                                <Badge badgeTitle="Tailwind" />
                            </div>
                        </TileContainer>
                        <TileContainer>
                            <TitleCv>Idiomas</TitleCv>
                            <div>
                                <Badge badgeTitle="Inglés intermedio" />
                            </div>
                        </TileContainer>
                    </JobColumn>
                </Grid>
            </Container>

        </StyledMain>
    )
}
