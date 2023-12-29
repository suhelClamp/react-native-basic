import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: "https://v2.jokeapi.dev/joke/Any"
    }

    const fetchData = async() => {
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return {data, isLoading, error}
}

export default useFetch;