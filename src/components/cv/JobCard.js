import React from 'react';

const JobCard = (props) => {
    return (

        <article className="card">
            <div className="card__header">
                <h3 className="card__header__title">{props.puesto} en {props.empresa} </h3>
                <small className="card__header__date">{props.fecha_entrada} - </small>
                <small className="card__header__date">{props.fecha_salida}</small>
            </div>
            <p className="card__content">{props.actividades}</p>
        </article>
    )
}

export default JobCard
