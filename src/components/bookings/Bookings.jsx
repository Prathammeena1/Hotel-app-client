import { useSelector } from "react-redux";
import { cancelBookingService } from "../../api/bookingServices";

const Bookings = () => {
    const bookings = useSelector((state) => state.user.user.bookings);

    return (
        <ul>
            {bookings.map((booking) => (
                <li key={booking._id}>
                    Property ID: {booking.property} | Check-In:{" "}
                    {new Date(booking.checkInDate).toDateString()} | Check-Out:{" "}
                    {new Date(booking.checkOutDate).toDateString()} | Status:{" "}
                    {booking.status}
                    {booking.status === "Confirmed" && (
                        <button
                            onClick={() => cancelBookingService(booking._id)}
                        >
                            Cancel Booking
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Bookings;
