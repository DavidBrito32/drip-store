import { useState, useEffect } from "react";

type Hookdata<DataType> = {
  data: Array<DataType>;
  loading: boolean;
  error: string | null;
};

export const useFetch = <DataType>(URL: string): Hookdata<DataType> => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      await fetch(URL)
        .then((item) => item.json())
        .then((item) => setData(item));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return {
    data,
    loading,
    error,
  };
};
