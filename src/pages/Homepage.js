import React from 'react';
/* import { Link } from "react-router-dom"; */
import { Profile } from "../components/Profile"
import JobList from "../components/JobList"

import Title from "../components/Title"
import SectionCard from "../components/SectionCard"
import Badge from "../components/Badge"
export function Homepage() {

    return (
        <main className="main">
            <div className="content home">
                <div className="profile">
                    <Profile />
                    <section className="profile__container flex flex-wrap">
                        <Title title='Áreas de especialidad' />
                        <div>
                            <Badge badgeTitle="Diseño gráfico" />
                            <Badge badgeTitle="Diseño web" />
                            <Badge badgeTitle="UI" />
                            <Badge badgeTitle="Desarrollo web" />
                        </div>
                    </section>
                    <section className="profile__container flex flex-wrap">
                        <Title title='Habilidades' />
                        <div>
                            <Badge badgeTitle="Adobe Creative Suite" />
                            <Badge badgeTitle="HTML" />
                            <Badge badgeTitle="CSS" />
                            <Badge badgeTitle="Javascript" />
                            <Badge badgeTitle="Git" />
                            <Badge badgeTitle="React Js" />
                            <Badge badgeTitle="Maquetación web" />
                            <Badge badgeTitle="Fotocomposición" />
                            <Badge badgeTitle="SEO" />
                            <Badge badgeTitle="Multimedia" />
                            <Badge badgeTitle="WordPress" />
                        </div>
                    </section>
                </div>
                <div className="job-list">
                    <JobList />
                    <section className="job-list__container flex flex-wrap">
                        <Title title='Educación' />
                        <SectionCard
                            cardTitle="Universidad Autónoma de Coahuila"
                            dateStart="2008"
                            dateFinished="2013"
                            cardContent="Escuela de Artes Plásticas - Licenciatura en diseño gráfico."
                        />
                    </section>
                    <section className="job-list__container flex flex-wrap">
                        <Title title='Idiomas' />
                        <div>
                            <Badge badgeTitle="Inglés intermedio" />
                        </div>
                    </section>
                </div>
            </div>

        </main>
    )
}
