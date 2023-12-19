import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

type Hookdata<DataType> = {
  data: Array<DataType>;
  loading: boolean;
  error: string | null;
};

export const useAxios = <DataType>(URL: string): Hookdata<DataType> => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const axiosData = async () => {
    try {
      await axios
        .get(URL)
        .then((item: AxiosResponse<DataType[]>) => setData(item.data))
        .catch((err) => {
          throw new Error(err.message);
        });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    axiosData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return {
    data,
    loading,
    error,
  };
};
