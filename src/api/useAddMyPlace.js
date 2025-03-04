import axios from "axios";



const useAddMyPlace = () => {

    const addMyPlace = async (place) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/users/places", {
                place: place
            });
            console.log(response.data);
        } catch (error) {
            console.error("There was an error adding the place!", error);
        }
    }

    return { addMyPlace };
}

export default useAddMyPlace;