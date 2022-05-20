import React from 'react';
/* import { Link } from "react-router-dom"; */
import { Profile } from "../components/Profile"
import JobCard from "../components/JobCard"

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
                    <section className="job-list__container flex flex-wrap">
                        <Title title='Experiencia profesional' />
                        <JobCard
                            puesto="Desarrollador y diseñador web"
                            empresa="Ad Nest Publicidad"
                            fecha_entrada="Jun 2020"
                            fecha_salida="Enero 2022"
                            actividades="Diseño y desarrollo de sitios web. Diseño de logotipos y material gráfico."
                        />
                        <JobCard
                            puesto="Desarrollador y diseñador web"
                            empresa="Etix"
                            fecha_entrada="May 2019"
                            fecha_salida="Jun 2020"
                            actividades="Diseñador y maquetador web. Desarrollo de página de la empresa y para clientes."
                        />
                        <JobCard
                            puesto="Maquetador web"
                            empresa="Grupo Móvil México"
                            fecha_entrada="Mar 2018"
                            fecha_salida="May 2019"
                            actividades="Maquetado de sitios web y sistemas de gestión internos."
                        />
                        <JobCard
                            puesto="Diseñador gráfico y diseñador web"
                            empresa="MARC Consultores Web"
                            fecha_entrada="Abr 2017"
                            fecha_salida="Ene 2018"
                            actividades="Diseño de logotipos y materiales impresos. Diseño de gráficos para web. Maquetación en Wordpress y ajuste de estilos CSS. Optimización Seo."
                        />
                        <JobCard
                            puesto="Desarrollador y diseñador web"
                            empresa="Ad Nest Publicidad"
                            fecha_entrada="Jul 2014"
                            fecha_salida="Abr 2017"
                            actividades="Administración de redes sociales (Facebook y twiter): Curación y publicación de contenidos. Interacción con usuarios: Respuesta a preguntas y comentarios, control de daños. Diseño gráfico: diseño de materiales para publicaciones y layouts para contenido en redes, logos, flyers, invitaciones y diseño de paginas web. Web: Diseño y programación html, css, javascript."
                        />
                        <JobCard
                            puesto="Diseñador gráfico"
                            empresa="AVE Publicidad"
                            fecha_entrada="Oct 2013"
                            fecha_salida="May 2014"
                            actividades="Atención a clientes, recepción y gestión de pedidos, diseño gráfico, ventas, actividades administrativas."
                        />
                        <JobCard
                            puesto="Diseñador Gráfico"
                            empresa="Uniformes GB"
                            fecha_entrada="Jun 2012"
                            fecha_salida="Ago 2013"
                            actividades="Digitalización de imágenes para impresión en serigrafía, bordado y corte laser. Manejo de la publicidad."
                        />
                        <JobCard
                            puesto="Diseñador Gráfico"
                            empresa="Impresionarte Saltillo"
                            fecha_entrada="Sep 2011"
                            fecha_salida="Ene 2012"
                            actividades="Diseño de lonas, volantes y flyers y tarjetas de presentación. Diseño de logotipos."
                        />
                    </section>
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
