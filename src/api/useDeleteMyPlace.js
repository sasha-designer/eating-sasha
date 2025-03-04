import axios from 'axios';

const useDeleteMyPlace = () => {
    const deletePlace = async (placeId) => {
        try {
            const response = await axios.delete(`/api/users/places/${placeId}`);

            console.log('Place deleted successfully:', response, placeId);
        } catch (error) {
            console.error('Error deleting place:', error);
        }
    };

    return { deletePlace };
};

export default useDeleteMyPlace;