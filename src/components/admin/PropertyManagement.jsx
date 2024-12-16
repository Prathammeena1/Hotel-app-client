import { toast } from "react-toastify";
import {
    deletePropertyService,
    getPropertiesService,
} from "../../api/adminServices";

const PropertyManagement = () => {
    const [properties, setproperties] = useState([]);

    useEffect(async () => {
        const data = await getPropertiesService();
        setproperties(data);
    }, []);

    const handleDelete = (propertyId) => {
        deletePropertyService(propertyId);
        toast.success("Property deleted successfully");
    };

    return (
        <div>
            <h2>Property Management</h2>
            <ul>
                {properties.map((property) => (
                    <li key={property._id}>
                        {property.title} - {property.location}
                        <button onClick={() => handleDelete(property._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyManagement;
