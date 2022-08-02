import { Link } from "@inertiajs/inertia-react";
import React from "react";

const AdminSidebar = () => {
    const data = [
        { text: "Users", url: "users", icon: "fas fa-user" },
        { text: "Blog Posts", url: "blogs", icon: "fas fa-blog" },
        { text: "Create a blog", url: "blog-create", icon: "fab fa-blogger" },
        { text: "Supports", url: "supports", icon: "fas fa-dollar-sign" },
        { text: "Withdrawals", url: "withdrawals", icon: "fas fa-dollar-sign" },
        {
            text: "Pending Papers",
            url: "pending-papers",
            icon: "fas fa-paper-plane",
        },
        {
            text: "Approved Papers",
            url: "approved-papers",
            icon: "fas fa-newspaper",
        },
    ];
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-white shadow-lg"
            id="admin-nav"
        >
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mb-2 mb-lg-0 flex-column mt-5">
                        {data.map((item, key) => {
                            const active =
                                `/admin/${item.url}` ===
                                window.location.pathname
                                    ? "active"
                                    : "";
                            return (
                                <li className="nav-item my-lg-3" key={key}>
                                    <Link
                                        className={`nav-link ${active}`}
                                        aria-current="page"
                                        href={`/admin/${item.url}`}
                                    >
                                        <i className={item.icon}></i>
                                        <span> {item.text}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AdminSidebar;
