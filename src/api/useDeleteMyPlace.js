import axios from 'axios';

const useDeleteMyPlace = () => {
    const deletePlace = async (placeId) => {
        try {
            const response = await axios.delete(`http://localhost:3000/users/places/${placeId}`, { withCredentials: true });

            console.log('Place deleted successfully:', response, placeId);
        } catch (error) {
            console.error('Error deleting place:', error);
        }
    };

    return { deletePlace };
};

export default useDeleteMyPlace;