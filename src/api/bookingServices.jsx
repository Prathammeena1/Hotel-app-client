import { toast } from "react-toastify";
import axios from "./axiosConfig";

// create booking service
export const createBookingService = async (booking) => {
    try {
        const { data } = await axios.post("/bookings", booking);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// view user bookings service
export const viewUserBookingsService = async (userId) => {
    try {
        const { data } = await axios.get(`/bookings/user/${userId}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// cancel booking service
export const cancelBookingService = async (bookingId) => {
    try {
        const { data } = await axios.delete(`/bookings/${bookingId}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};
