import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null);
        setError(null);
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error.message || "Kuch tw gadh badh hai!")
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [url]);

  return {data,loading,error}

}

export default useFetch