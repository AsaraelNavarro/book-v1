import { useEffect, useState } from "react";

export const headers = {
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
                const reposShow = 3, sort = "updated"


                const res = await fetch(url,
                    {
                        "method": "GET",
                        "headers": headers,
                        "per_page": reposShow,
                        "sort": sort
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