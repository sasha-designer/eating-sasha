import axios from "axios";
import { useEffect, useState } from "react";


const useMyList = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/api/users/places")
            .then((response) => {
                const { places } = response.data;
                setPlaces(places);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                setPlaces([]);
            }).finally(() => {
                setLoading(false);
            });
    }, []);

    return { places, loading };
}

export default useMyList;