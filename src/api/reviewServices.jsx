import { toast } from "react-toastify";
import axios from "./axiosConfig";

// add review service
export const addReview = async (reviewData) => {
    try {
        const response = await axios.post(`/reviews/`, reviewData);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
    }
};

// update review service
export const updateReview = async (reviewData, id) => {
    try {
        const response = await axios.put(`/reviews/${id}`, reviewData);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
    }
};

// delete review service
export const deleteReview = async (id) => {
    try {
        const response = await axios.delete(`/reviews/${id}`);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
    }
};

// view reviews service
export const viewReviews = async (propertyId) => {
    try {
        const response = await axios.get(`/reviews/${propertyId}`);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
    }
};
