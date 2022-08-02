import { useForm } from "@inertiajs/inertia-react";
import React from "react";

const AdminHead = () => {
    const form = useForm();

    const logout = () => {
        form.post("/logout");
    };
    return (
        <nav
            className="navbar navbar-dark bg-ndetek text-white"
            id="admin-head"
        >
            <div className="container">
                <div className="dropdown">
                    <div
                        className="dropdown-toggle fs-4 fw-bold text-capitalize"
                        id="user-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="fas-4">Admin</span>
                    </div>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="user-dropdown"
                    >
                        <li>
                            <button className="dropdown-item" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AdminHead;
