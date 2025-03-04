import axios from "axios";
import { useEffect, useState } from "react";


const useAllList = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:3000/places", { withCredentials: true })
            .then((response) => {
                const { places } = response.data;
                setPlaces(places);
                setError(null);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
                setPlaces([]);
                if (error.response && error.response.status === 404) {
                    setError("요청하신 데이터를 찾을 수 없습니다. (404)");
                } else {
                    setError("데이터를 불러오는 중에 오류가 발생했습니다.");
                }
            }).finally(() => {
                setLoading(false);
            });
    }, []);

    return { places, loading, error };
}

export default useAllList;