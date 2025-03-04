import axios from "axios";
import { useEffect, useState } from "react";


const useReadMyPlaces = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPlaces, setnewPlaces] = useState([]);

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


    // const addPlace = (newPlace) => {
    //     return axios
    //         .post("/api/users/places", { newPlace })
    //         .then((response) => {
    //             setnewPlaces((prevPlaces) => [...prevPlaces, response.data.place]);
    //         })
    //         .catch((error) => {
    //             console.error("There was an error adding the place!", error);
    //         });
    // };









    return { places, loading };
}



export default useReadMyPlaces;