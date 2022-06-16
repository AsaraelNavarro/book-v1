import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({ auth: `${process.env.REACT_APP_GH_TOKEN}` });

export const headers = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": `Token ${process.env.REACT_APP_GH_TOKEN}`
}

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data } = await octokit.rest.repos.listForAuthenticatedUser({
                    "per_page": 4,
                    "sort": "updated"
                })
                /* console.log(data); */

                /* const { content } = await data.map((image) => {
                    return fetch(image.contents_url.replace('{+path}', 'public'), {
                        "method": "GET",
                        "headers": headers
                    })
                })
                console.log({ content }) */

                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { loading, error, data }
}

export default useFetch