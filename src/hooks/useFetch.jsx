import { useState, useEffect } from "react";

export const useFetch = (url , token) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      setIsPending(true);
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }
        const data = await res.json();
        setData(data);
        setError({ err: false });
      } catch (err) {
        setError(err);
      } finally {
        setIsPending(false);
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };

};
