import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewPropertyService } from "../../api/propertyServices";

const Property = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const property = viewPropertyService(id);
        setProperty(property);
    }, [id]);

    if (!property) return <p>Loading...</p>;

    return (
        <div>
            <h1>{property.title}</h1>
            <p>{property.description}</p>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price}</p>
            <p>Amenities: {property.amenities.join(", ")}</p>
            <div>
                {property.images.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Property ${index + 1}`}
                        width="200"
                    />
                ))}
            </div>
        </div>
    );
};

export default Property;
