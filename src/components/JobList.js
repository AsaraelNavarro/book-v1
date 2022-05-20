import React from 'react';

import useFetch from "../hooks/useFetch"
import Title from "../components/Title"

export default function JobList() {
    /* const apiUrl = 'http://localhost:1337/api/jobs/'
    const apiUrl = 'https://strapi-mycv.herokuapp.com//api/jobs/' */
    const { loading, error, data } = useFetch(apiUrl)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
        <section className="job-list__container flex flex-wrap">
            <Title title='Experiencia profesional' />
            {data.data.map((jobs) => (
                <article key={jobs.id} className="card">
                    <div className="card__header">
                        <h3 className="card__header__title">{jobs.attributes.puesto} en {jobs.attributes.empresa} </h3>
                        <small className="card__header__date">{jobs.attributes.fecha_entrada} - </small>
                        <small className="card__header__date">{jobs.attributes.fecha_salida}</small>
                    </div>
                    <p className="card__content">{jobs.attributes.actividades}</p>
                    <Link to={`/detalles/${jobs.id}`}>Ver Más</Link>
                </article>
            ))}
        </section>
    )
}
