// src/components/SearchProperty.jsx
import React, { useEffect, useState } from "react";
import { searchPropertiesService } from "../../api/propertyServices";
import { Link } from "react-router-dom";

const Properties = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        handleSearch();
    }, [query]);

    const handleSearch = async () => {
        const properties = await searchPropertiesService(query);
        setResults(properties);
    };
    console.log(results);
    return (
        <div>
            <nav>
                <Link to="">Create Property</Link>
                <div>
                    <input
                        type="text"
                        placeholder="Search properties..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </nav>

            <ul>
                {results.map((property) => (
                    <li key={property._id}>
                        {property.title} - ${property.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Properties;
