import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import data from "../Data/navbar";
import PaymentModal from "./PaymentModal";
import axios from "axios";

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(true);
    const [hide, setHide] = useState(false);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios
            .get("/check-auth")
            .then((res) => {
                if (res.data.auth !== undefined) setIsAuth(false);
            })
            .catch(() => setHide(true));

        axios.get("/paper-nav").then((res) => setCats(res.data));
    }, [axios]);

    return (
        <>
            <PaymentModal
                title="Support Us"
                buttonText="Support Now"
                isWithdrawal={false}
            />
            <nav className="navbar navbar-expand-lg navbar-light bg-white normal-navbar nav-bottom">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <img
                            src="/storage/images/ndetek-logo.png"
                            width="150"
                            alt="NdeTek Logo"
                            className="img-fluid"
                        />
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
                        <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
                            {data.map((link, key) => {
                                const active =
                                    link.href === window.location.pathname
                                        ? "active"
                                        : null;
                                return (
                                    <li className="nav-item" key={key}>
                                        <Link
                                            className={`nav-link ${active}`}
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
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Papers
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
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

                            <span className="d-flex" id="navBtns">
                                {!hide ? (
                                    <li className="nav-item">
                                        <Link
                                            className="btn btn-ndetek"
                                            href="/login"
                                        >
                                            {!isAuth ? "Login" : "Account"}
                                        </Link>
                                    </li>
                                ) : null}
                                <li className="nav-item">
                                    <button
                                        className="btn btn-outline-ndetek"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal"
                                    >
                                        <i className="fas fa-dollar-sign"></i>
                                        <span> Support</span>
                                    </button>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="lang"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="/storage/images/en.png"
                                            width="30"
                                            alt="En"
                                            className="img-fluid"
                                        />
                                        <span>{` English`}</span>
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="lang"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <img
                                                    src="/storage/images/en.png"
                                                    width="30"
                                                    alt="En"
                                                    className="img-fluid"
                                                />
                                                <span>{` English`}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <img
                                                    src="/storage/images/fre.png"
                                                    width="30"
                                                    alt="En"
                                                    className="img-fluid"
                                                />
                                                <span>{` French`}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </span>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
