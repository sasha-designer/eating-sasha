import axios from "axios";



const useAddMyPlace = () => {

    const addMyPlace = (place) => {
        axios.
            post("/api/users/places", {
                place: place
            },
                { "Content-Type": "application/json", withCredentials: true },
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error("There was an error adding the place!", error);
            });
    }

    return { addMyPlace };
}

export default useAddMyPlace;