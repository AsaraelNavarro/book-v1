import { useEffect, useState } from "react";

export const headers = {
    "Accept": "application/vnd.github.v3+json",
    "Authorization": `Token ${process.env.REACT_APP_GH_TOKEN}`
}

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url,
                    {
                        "method": "GET",
                        "headers": headers,
                    })
                const json = await res.json()

                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { loading, error, data }
}

export default useFetch