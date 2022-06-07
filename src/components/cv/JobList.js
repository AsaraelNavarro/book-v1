import React from 'react';

import useFetch from "../../hooks/useFetch"
import Title from "../../components/cv/Title"

export default function JobList() {
    const contentType = 'jobs'
    /* const apiUrl = 'http://localhost:1337/api/jobs/' */
    const apiUrl = `http://localhost:1337/api/${contentType}`;
    const { loading, error, data } = useFetch(apiUrl)

    /* console.log(data); */

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
        <section className="job-list__container flex flex-wrap">
            <Title title='Experiencia profesional' />
            {data.data.map((jobs) => (
                <article key={jobs.id} className="card">
                    <div className="card__header">
                        <h3 className="card__header__title">{jobs.attributes.position} en {jobs.attributes.company} </h3>
                        <small className="card__header__date">{jobs.attributes.start_date} - </small>
                        <small className="card__header__date">{jobs.attributes.exit_date}</small>
                    </div>
                    <p className="card__content">{jobs.attributes.activities}</p>
                </article>
            ))}
        </section>
    )
}
