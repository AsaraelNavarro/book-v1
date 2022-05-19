import React from 'react';
import { useParams } from "react-router-dom"
import useFetch from '../hooks/useFetch'

export function JobDetails() {
    /* const apiUrl = 'http://localhost:1337/api/jobs/' */
    const apiUrl = 'https://strapi-mycv.herokuapp.com/api/jobs/'
    const { id } = useParams();
    const { loading, error, data } = useFetch(apiUrl + id);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <main className="content">
            <h2>Detalles del empleo</h2>
            <section className="job-list__container flex flex-wrap">
                <article className="card">
                    <div className="card__header">
                        <h2 className="card__header__title">{data.data.attributes.puesto} en {data.data.attributes.empresa} </h2>
                        <small className="card__header__date">{data.data.attributes.fecha_entrada} -</small>
                        <small className="card__header__date">{data.data.attributes.fecha_salida}</small>
                    </div>
                    <p className="card__content">{data.data.attributes.actividades}</p>
                </article>
            </section>
        </main>

    )
}
