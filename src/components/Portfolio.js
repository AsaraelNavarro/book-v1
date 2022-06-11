import React from 'react';
import fetchGit from "./../hooks/fetchGit";
import { Title, Button, /* LightButton, */ Figure } from './styles/Elements.styled';
import { Container, Grid } from './styles/Layout.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Portfolio() {

    const apiUrl = `https://api.github.com/user/repos?q=sort:pushed`;
    /* const apiUrl = "https://api.github.com/users/asaraelnavarro/repos"; */

    const { loading, error, data } = fetchGit(apiUrl)
    console.log(data);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    return (
        <Container>
            <Title light>Proyectos recientes</Title>
            <Grid>
                {data.map((repos) => (
                    <article key={repos.id}>
                        <Figure>
                            <img src={repos.content_url} alt="Avatar Asarael Navarro Beltrán" />
                        </Figure>
                        <div>
                            <h3>{repos.name}</h3>
                            <p>{repos.description}</p>
                            <ul>
                                <li>{repos.language}</li>
                                <li><FontAwesomeIcon icon={solid('star')} /> {repos.stargazers_count}</li>
                                <li><FontAwesomeIcon icon={solid('code-fork')} /> {repos.forks}</li>
                            </ul>
                            <Button href={repos.html_url} target="_blank" rel="noopener noreferrer">
                                Repositorio <FontAwesomeIcon icon={brands('github')} />
                            </Button>
                            {/* <LightButton href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={solid('file-code')} />
                            </LightButton> */}
                        </div>
                    </article>
                ))}
            </Grid>
        </Container>
    )
}
