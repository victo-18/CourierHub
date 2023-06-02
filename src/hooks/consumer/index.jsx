import { useEffect, useState } from "react";

/**
 * Hook personalizado que utiliza una función de API y devuelve los datos y el estado de carga.
 * @param {Function} apiFunction - Una función de API que devuelve una promesa con la respuesta del servidor.
 * @param {Array} dependencies - Una matriz de dependencias opcionales que, si cambian, vuelven a llamar a la función de la API.
 * @returns {Object} Un objeto que contiene los datos devueltos por la función de la API y un valor booleano que indica si los datos están cargando.
 */
export const useFetchData = (apiFunction, dependencies = []) => {
    const [data, setData] = useState(null); // El estado que almacena los datos devueltos por la función de la API.
    const [loading, setLoading] = useState(true); // El estado que indica si los datos están cargando.

    useEffect(() => {
        const fetchData = async () => {
            const { status, data } = await apiFunction(); // Se llama a la función de la API y se almacena la respuesta.

            if (status === 200) { // Si la respuesta es exitosa (estado 200), actualiza el estado con los datos y cambia el estado de carga.
                setData(data);
                setLoading(false);
            }
        };

        fetchData(); // Se llama a la función fetchData.

        // Se limpia el estado al desmontar el componente.
        return () => { setData(null); setLoading(true); }

        // eslint-disable-next-line
    }, dependencies); // Se usa el hook useEffect para llamar a fetchData en función de las dependencias.

    return { data, loading }; // Devuelve un objeto que contiene los datos y el estado de carga.
};
