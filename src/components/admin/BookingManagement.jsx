import { getBookingsService } from "../../api/adminServices";

const BookingManagement = () => {
    const [bookings, setbookings] = useState([]);
    useEffect(async () => {
        const data = await getBookingsService();
        setbookings(data);
    }, []);

    return (
        <div>
            <h2>Booking Management</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        Property: {booking.property} | User: {booking.user} |
                        Check-In: {new Date(booking.checkInDate).toDateString()}{" "}
                        | Status: {booking.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingManagement;
