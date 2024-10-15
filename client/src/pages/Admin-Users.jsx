import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken, API } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch(`${API}/api/admin/users`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };


    const deleteUser = async (id) => {
        const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: authorizationToken,
            },
        });
        const data = await response.json();
        console.log(`users after delete :  ${data}`);

        if (response.ok) {
            getAllUsersData();
        }
    };
    useEffect(() => {
        getAllUsersData();
    }, [authorizationToken]);
    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) => {
                                // Skip rows where username, email, or phone are empty
                                if (!curUser.username || !curUser.email || !curUser.phone) {
                                    return null; // Don't render this row
                                }
                                return (<tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone}</td>
                                    <td><Link to={`/admin/users/${curUser._id}/edit`}>
                                        <button class="edit-btn action-btn">Edit</button>
                                    </Link></td>
                                    <td><button class="delete-btn action-btn" onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};
