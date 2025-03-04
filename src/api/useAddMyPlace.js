import axios from "axios";



const useAddMyPlace = () => {

    const addMyPlace = async (place) => {
        try {
            const response = await axios.post("/api/users/places", {
                place: place
            },
            { "Content-Type": "application/json", withCredentials: true });
            console.log(response.data);
        } catch (error) {
            console.error("There was an error adding the place!", error);
        }
    }

    return { addMyPlace };
}

export default useAddMyPlace;