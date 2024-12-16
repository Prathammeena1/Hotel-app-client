import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteUserService, getUsersService } from "../../api/adminServices";

const UserManagement = () => {
    const [users, setusers] = useState([]);

    useEffect(async () => {
        const data = await getUsersService();
        setusers(data);
    }, []);

    const handleDelete = (userId) => {
        deleteUserService(userId);
        toast.success("User deleted successfully");
    };

    return (
        <div>
            <h2>User Management</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.username} - {user.email}
                        <button onClick={() => handleDelete(user._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
