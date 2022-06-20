import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({ auth: `${process.env.REACT_APP_GH_TOKEN}` });

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const { data } = await octokit.rest.repos.listForAuthenticatedUser({
                    "sort": "updated_url"
                })
                /* console.log(data); */

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