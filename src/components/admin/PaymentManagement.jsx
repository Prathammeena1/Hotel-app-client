import { getPaymentsService } from "../../api/adminServices";

const PaymentManagement = () => {
    const [payments, setpayments] = useState([]);
    useEffect(async () => {
        const data = await getPaymentsService();
        setpayments(data);
    }, []);

    return (
        <div>
            <h2>Payment Management</h2>
            <ul>
                {payments.map((payment) => (
                    <li key={payment._id}>
                        Payment ID: {payment.paymentId} | Amount:{" "}
                        {payment.amount} | Status: {payment.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentManagement;
