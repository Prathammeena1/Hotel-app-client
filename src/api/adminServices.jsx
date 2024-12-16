import { toast } from "react-toastify";
import axios from "./axiosConfig";

// get all users service
export const getUsersService = async () => {
    try {
        const { data } = await axios.get("/admin/users");
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// delete user service
export const deleteUserService = async (id) => {
    try {
        const { data } = await axios.delete(`/admin/users/${id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// get all properties service
export const getPropertiesService = async () => {
    try {
        const { data } = await axios.get("/admin/properties");
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// delete property service
export const deletePropertyService = async (id) => {
    try {
        const { data } = await axios.delete(`/admin/properties/${id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// get all bookings service
export const getBookingsService = async () => {
    try {
        const { data } = await axios.get("/admin/bookings");
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// get all payments service
export const getPaymentsService = async () => {
    try {
        const { data } = await axios.get("/admin/payments");
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// get payment details for a specific booking service
export const getSinglePaymentService = async (id) => {
    try {
        const { data } = await axios.get(`/admin/payments/${id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};
