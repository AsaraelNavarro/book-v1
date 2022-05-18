import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom";

export function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/jobs')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
        <main className="content">
            <h2>Experiencia Profesional</h2>
            <section className="container">
                {data.data.map((jobs) => (
                    <article key={jobs.id} className="job-card">
                        <h2 className="job-title">{jobs.attributes.puesto} en {jobs.attributes.empresa} </h2>
                        <small className="date">De: {jobs.attributes.fecha_entrada} -</small>
                        <small className="date">A: {jobs.attributes.fecha_salida}</small>
                        <p className="activities">{jobs.attributes.actividades}</p>
                        <Link to={`/details/${jobs.id}`}>Ver Más</Link>
                    </article>
                ))}
            </section>
        </main>
    )
}
