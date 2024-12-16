// src/components/CreateProperty.jsx
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPropertyService } from "../../api/propertyServices";

const CreateProperty = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        createPropertyService(data);
    };

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
                <label>Amenities (comma separated):</label>
                <input
                    {...register("amenities")}
                    placeholder="e.g., WiFi, Air Conditioning"
                />
            </div>
            <div>
                <label>Images (comma separated URLs):</label>
                <input
                    {...register("images")}
                    placeholder="e.g., http://example.com/image1.jpg"
                />
            </div>
            <button type="submit">Create Property</button>
        </form>
    );
};

export default CreateProperty;
