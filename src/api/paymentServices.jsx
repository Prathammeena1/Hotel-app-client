import { toast } from "react-toastify";
import axios from "./axiosConfig";

// process payment service using razorpay
export const processPayment = async (paymentData) => {
    try {
        const response = await axios.post("/payments", paymentData);
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
    }
};

// verify payment service using razorpay
export const verifyPayment = async (paymentData) => {
    try {
        const response = await axios.post(
            "/payments/verify-payment",
            paymentData
        );
        return response.data;
    } catch (error) {
        toast.error(error.response.data.error);
    }
};
