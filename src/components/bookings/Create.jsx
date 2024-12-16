import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createBookingService } from "../../api/bookingServices";
import { asynccurrentuser } from "../../store/actions/userActions";
import { toast } from "react-toastify";

const Create = ({ propertyId, userId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const bookingData = {
            ...data,
            property: propertyId,
            user: userId,
        };
        await createBookingService(bookingData);
        dispatch(asynccurrentuser());
        toast.success("Booking created successfully");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Check-In Date</label>
                <input
                    type="date"
                    {...register("checkInDate", { required: true })}
                />
                {errors.checkInDate && <p>Check-in date is required</p>}
            </div>
            <div>
                <label>Check-Out Date</label>
                <input
                    type="date"
                    {...register("checkOutDate", { required: true })}
                />
                {errors.checkOutDate && <p>Check-out date is required</p>}
            </div>
            <div>
                <label>Total Price</label>
                <input
                    type="number"
                    {...register("totalPrice", { required: true })}
                />
                {errors.totalPrice && <p>Total price is required</p>}
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default Create;
