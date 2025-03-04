import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const useReadMyPlaces = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const favorites = useSelector((state) => state.favorites);




    useEffect(() => {
        setLoading(true);
        const fetchPlaces = async () => {
            try {
                const response = await axios.get("/api/users/places");
                const { places } = response.data;
                setPlaces(places);
            } catch (error) {
                console.error("There was an error fetching the data!", error);
                setPlaces([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, [favorites]);

    return { places, loading };
}



export default useReadMyPlaces;