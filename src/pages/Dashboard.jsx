import { useDispatch } from "react-redux";
import { asynclogout } from "../store/actions/userActions";

const Dashboard = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => dispatch(asynclogout())}>Logout</button>
        </div>
    );
};

export default Dashboard;
