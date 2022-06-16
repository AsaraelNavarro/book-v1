import React from 'react';
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";

/* import fetchGit from "./../hooks/fetchGit"; */
import { Title, Button, LightButton, Figure, Loader } from './styles/Elements.styled';
import { Container, Grid } from './styles/Layout.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const octokit = new Octokit({ auth: `${process.env.REACT_APP_GH_TOKEN}` });

export default function Portfolio() {
    /* const apiUrl = `https://api.github.com/user/repos`; */
    /* const { loading, error, data } = fetchGit(); */
    const [data, setData] = useState([]);
    const [content, setContent] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                await octokit.rest.repos.listForAuthenticatedUser({
                    "per_page": 4,
                    "sort": "updated_url"
                })
                    .then(({ data }) => {
                        // handle data
                        /* console.log(data); */
                        setData(data)
                    });
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }


        const fetchContent = async () => {
            setLoading(true)
            try {
                await data.map(content => content.contents_url.replace('{+path}', 'public/cover.jpg'))
                console.log(fetchContent)
                    .then(({ data }) => {
                        // handle data
                        /* console.log(data); */
                        setContent(data)
                    });
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
        fetchContent()
    }, [])



    /*  const fetchContent = repoData.map(content => content.contents_url.replace('{+path}', 'public/cover.jpg'))
     console.log(fetchContent); */





    console.log(data, content);



    function byDate(a, b) {
        return new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
    };



    if (loading) return <Container><Loader /></Container>
    if (error) return <Container><p>Error</p></Container >
    return (
        <Container>
            <Title light>Proyectos recientes</Title>
            <Grid>
                {data.sort(byDate).map((repos) => (
                    <article key={repos.id}>
                        <Figure>
                            <img src="" alt="Avatar Asarael Navarro Beltrán" />
                        </Figure>
                        <div>
                            <h3>{repos.name}</h3>
                            <p>{repos.description}</p>
                            <ul>
                                <li>{repos.language}</li>
                                <li><FontAwesomeIcon icon={solid('star')} />  {repos.stargazers_count}</li>
                                <li><FontAwesomeIcon icon={solid('code-fork')} />  {repos.forks}</li>
                            </ul>
                            <Button href={repos.html_url} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={brands('github')} />  Repositorio
                            </Button>
                            <LightButton href="http://" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={solid('file-code')} />
                            </LightButton>
                        </div>
                    </article>
                ))}
            </Grid>
        </Container>
    )
}
