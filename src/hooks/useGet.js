import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useGet = (url, token) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          url,
          token && {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${await getToken()}`,
            },
          }
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token, getToken]);

  return { data, loading, isError };
};

export default useGet;
