import React from 'react'
/* import useFetch from "./../hooks/useFetch"; */
import { Title, Button, LightButton } from './styles/Elements.styled';
import { Container, Flex } from './styles/Layout.styled';
import avatar from './../images/perfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Portfolio() {
    /* const contentType = 'repos'
    const apiUrl = `https://api.github.com/users/asaraelnavarro/${contentType}?callback=abc`;
    const { loading, error, data } = useFetch(apiUrl)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p> */
    return (
        <Container>
            <Title light>Proyectos recientes</Title>
            <Flex>
                <article>
                    <figure>
                        <img src={avatar} className="avatar__image" alt="Avatar Asarael Navarro Beltrán" />
                    </figure>
                    <div>
                        <h3>Titulo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto, incidunt nesciunt assumenda, labore dolorem dicta esse, officiis dolor praesentium adipisci nobis aspernatur possimus asperiores porro sequi ex? Nobis, sint!</p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <LightButton href="http://" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={brands('github')} />
                        </LightButton>
                        <Button href="http://" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={solid('file-code')} />
                        </Button>
                    </div>
                </article>

            </Flex>

            {/* {data.data.map((repos) => (
                <article key={repos.data.id} className="card">
                    <div className="card__header">
                        <h3 className="card__header__title">{repos.attributes.position} en {repos.attributes.company} </h3>
                        <small className="card__header__date">{repos.attributes.start_date} - </small>
                        <small className="card__header__date">{repos.attributes.exit_date}</small>
                    </div>
                    <p className="card__content">{repos.attributes.activities}</p>
                </article>
            ))} */}
        </Container>
    )
}
