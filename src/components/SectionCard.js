import React from 'react';

const SectionCard = (props) => {
    return (

        <article className="card">
            <div className="card__header">
                <h3 className="card__header__title">{props.cardTitle}</h3>
                <small className="card__header__date">{props.dateStart} - </small>
                <small className="card__header__date">{props.dateFinished}</small>
            </div>
            <p className="card__content">{props.cardContent}</p>
        </article>
    )
}

export default SectionCard