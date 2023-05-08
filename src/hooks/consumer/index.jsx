import { useEffect, useState } from "react";

export const useFetchData = (apiFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const { status, data } = await apiFunction();

            if (status === 200) {
                setData(data);
                setLoading(false);
            }
        };

        fetchData();

        return () => { setData(null); setLoading(true); }

        // eslint-disable-next-line
    }, dependencies);

    return { data, loading };
};