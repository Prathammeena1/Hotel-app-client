import { toast } from "react-toastify";
import axios from "./axiosConfig";

// create property service
export const createPropertyService = async (property) => {
    try {
        const { data } = await axios.post("/properties", property);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// update property service
export const updatePropertyService = async (property) => {
    try {
        const { data } = await axios.put(
            `/properties/${property._id}`,
            property
        );
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// delete property service
export const deletePropertyService = async (id) => {
    try {
        const { data } = await axios.delete(`/properties/${id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// search properties service
export const searchPropertiesService = async (query) => {
    try {
        const { data } = await axios.get(`/properties/search${query}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

// search single property service
export const viewPropertyService = async (id) => {
    try {
        const { data } = await axios.get(`/properties/${id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};
