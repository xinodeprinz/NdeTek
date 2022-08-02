import React, { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import data from "../Data/navbar";
import axios from "axios";

const AccountHeader = ({ username, imagePath }) => {
    const [cats, setCats] = useState([]);
    const form = useForm();

    useEffect(() => {
        axios.get("/paper-nav").then((res) => setCats(res.data));
    }, [axios]);

    const logout = (e) => {
        e.preventDefault();
        form.post("/logout", {
            onSuccess: () => {
                new Swal({
                    title: "Success",
                    text: "Logout successful",
                    icon: "success",
                });
            },
        });
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-ndetek account-navbar">
            <div className="container">
                <Link
                    className="navbar-brand text-white fw-bold text-uppercase"
                    href="/"
                >
                    Dashboard
                </Link>
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
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {data.map((link, key) => {
                            const active =
                                link.href === window.location.pathname
                                    ? "active"
                                    : null;
                            return (
                                <li className="nav-item" key={key}>
                                    <Link
                                        className={`nav-link mx-lg-3 ${active}`}
                                        aria-current={active ? "page" : ""}
                                        href={link.href}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            );
                        })}

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="paper-dropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Papers
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="paper-dropdown"
                            >
                                {cats.map((item, id) => (
                                    <li key={id}>
                                        <Link
                                            className="dropdown-item text-capitalize"
                                            href={`/papers/${item.main.replaceAll(
                                                " ",
                                                "-"
                                            )}/${item.cat.replaceAll(
                                                " ",
                                                "-"
                                            )}`}
                                        >
                                            {item.main}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle my-0 py-0"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src={`/storage/${imagePath}`}
                                    alt={username}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "50%",
                                    }}
                                />
                                <span className="ms-2">{username}</span>
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="dropdown-item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#alertModal"
                                    >
                                        Delete Account
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="dropdown-item"
                                        onClick={logout}
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default AccountHeader;
