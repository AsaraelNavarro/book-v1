import React from 'react';
import fetchGit from '../hooks/fetchGit';

/* import fetchGit from "./../hooks/fetchGit"; */
import { Title, Button, ButtonLink, Figure } from './styles/Elements.styled';
import { Container, Grid, Article } from './styles/Layout.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Portfolio() {
    /* const apiUrl = `https://api.github.com/user/repos`; */
    const { loading, error, data } = fetchGit();
    /* console.log(data); */



    function byDate(a, b) {
        return new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
    };


    if (loading) return <Container>Loading...</Container>
    if (error) return <Container><p>Error</p></Container >
    return (
        <Container>
            <Title light>Proyectos recientes</Title>
            <Grid>
                {data.sort(byDate).slice(0, 4).map((repos) => (
                    <Article key={repos.id}>
                        <Figure>
                            <img src={`/covers/${repos.name}.jpg`} alt="Avatar Asarael Navarro Beltrán" />
                        </Figure>
                        <div>
                            <h3>{repos.name}</h3>
                            <p>{repos.description}</p>
                            <ul>
                                <li >{repos.language}</li>
                                <li><FontAwesomeIcon icon={solid('star')} />  {repos.stargazers_count}</li>
                                <li><FontAwesomeIcon icon={solid('code-fork')} />  {repos.forks}</li>
                            </ul>
                            <Button href={repos.html_url} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={brands('github')} />  Repositorio
                            </Button>
                        </div>
                    </Article>
                ))}
            </Grid>
            <ButtonLink to="/portfolio">Todos los proyectos</ButtonLink>
        </Container>
    )
}