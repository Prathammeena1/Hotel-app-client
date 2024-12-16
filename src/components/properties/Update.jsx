import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { updatePropertyService } from "../../api/propertyServices";

const Update = () => {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const property = viewPropertyService(id);
        Object.keys(property).forEach((key) => setValue(key, property[key]));
        setLoading(false);
    }, [id, setValue]);

    const onSubmit = async (data) => {
        updatePropertyService({ ...data, _id: id });
    };

    if (loading) return <p>Loading...</p>;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title:</label>
                <input
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    {...register("description", {
                        required: "Description is required",
                    })}
                />
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div>
                <label>Location:</label>
                <input
                    {...register("location", {
                        required: "Location is required",
                    })}
                />
                {errors.location && <p>{errors.location.message}</p>}
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    {...register("price", { required: "Price is required" })}
                />
                {errors.price && <p>{errors.price.message}</p>}
            </div>
            <div>
                <label>Amenities:</label>
                <input {...register("amenities")} />
            </div>
            <div>
                <label>Images:</label>
                <input {...register("images")} />
            </div>
            <button type="submit">Update Property</button>
        </form>
    );
};

export default Update;
