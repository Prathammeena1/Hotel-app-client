import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                <li>
                    <Link to="/admin/users">Manage Users</Link>
                </li>
                <li>
                    <Link to="/admin/properties">Manage Properties</Link>
                </li>
                <li>
                    <Link to="/admin/bookings">View Bookings</Link>
                </li>
                <li>
                    <Link to="/admin/payments">View Payments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
