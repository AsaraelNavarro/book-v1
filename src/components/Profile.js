import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import { Link } from 'react-router-dom';
import avatar from '../images/perfil.jpg';

export function Profile() {
    return (
        <section className="profile__container flex flex-wrap">
            <article className="avatar">
                <img src={avatar} className="avatar__image" alt="Avatar Asarael Navarro Beltrán" />
                <h1 className="avatar__name">Asarael Navarro</h1>
                <small className="avatar__info">El / He / Him - 38 años</small>
            </article>
            <article className="contact">
                <a className="contact__link mail" href="mailto:asarael.navarro@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={solid('envelope')} /> asarael.navarro@gmail.com
                </a>
                <a className="contact__link behance" href="https://www.behance.net/asarael_navarro" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('behance')} /> /asarael_navarro
                </a>
                <a className="contact__link github" href="https://github.com/AsaraelNavarro/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={brands('github')} />  @AsaraelNavarro
                </a>
            </article>
        </section>
    )
}
