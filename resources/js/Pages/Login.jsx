import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import FormHead from "../components/FormHead";
import SubmitButton from "../components/SubmitButton";
import data from "../Data/login";
import classNames from "classnames";
import Swal from "sweetalert2";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { showPassword } from "../Data/functions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
    // Title("Login");
    const [button, setButton] = useState({
        text: "Login",
        disabled: false,
    });

    const form = useForm({
        username: "",
        password: "",
        checked: false,
    });

    const handleInput = (e) => {
        form.setData(e.target.name, e.target.value);
        form.post("/validate");
    };

    const submit = (e) => {
        e.preventDefault();
        setButton({
            text: "Logging in ...",
            disabled: true,
        });
        form.post("/login", {
            onFinish: () => {
                setButton({
                    text: "Login",
                    disabled: false,
                });
            },
            onError: (e) => {
                if (Object(e).hasOwnProperty("failed")) {
                    new Swal({
                        title: "Login Failed",
                        text: e.failed,
                        icon: "error",
                    });
                }
            },
            onSuccess: () => {
                new Swal({
                    title: "Success",
                    text: "Login successful",
                    icon: "success",
                });
            },
        });
    };

    const handleCheck = () => {
        form.setData("checked", form.data.checked ? false : true);
    };
    return (
        <HelmetProvider>
            <Helmet>
                <title>NdeTek | Login</title>
                <meta
                    name="description"
                    content="Login to your account and be able to upload past papers and also place a withdrawal."
                />
                <link rel="canonical" href="/login" />
            </Helmet>
            <Navbar />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card shadow-lg border-primary">
                            <FormHead alt="Login" />
                            <div className="card-body">
                                <form onSubmit={submit} noValidate>
                                    {data.map((item, key) => {
                                        return (
                                            <div className="mb-3" key={key}>
                                                <label
                                                    htmlFor={item.name}
                                                    className="form-label d-flex justify-content-between align-items-center"
                                                >
                                                    <span>{item.label}</span>
                                                    {item.name ===
                                                    "password" ? (
                                                        <span>
                                                            <small>
                                                                <Link
                                                                    href="/forgot-password"
                                                                    className="card-link"
                                                                >
                                                                    Forgot
                                                                    password?
                                                                </Link>
                                                            </small>
                                                        </span>
                                                    ) : null}
                                                </label>
                                                <input
                                                    type={item.type}
                                                    className={classNames(
                                                        "form-control",
                                                        {
                                                            "is-invalid":
                                                                form.errors[
                                                                    item.name
                                                                ],
                                                            "is-valid":
                                                                form.hasErrors &&
                                                                !form.errors[
                                                                    item.name
                                                                ],
                                                        }
                                                    )}
                                                    id={item.name}
                                                    name={item.name}
                                                    placeholder={item.label}
                                                    onChange={handleInput}
                                                    value={form.data[item.name]}
                                                    disabled={button.disabled}
                                                    autoComplete="off"
                                                />
                                                {item.name === "password" ? (
                                                    <a
                                                        href="#"
                                                        className="text-ndetek"
                                                        onClick={showPassword}
                                                    >
                                                        <i
                                                            className="fas fa-eye-slash"
                                                            id="showIcon"
                                                            style={{
                                                                position:
                                                                    "absolute",
                                                                fontSize:
                                                                    "20px",
                                                                marginTop:
                                                                    "-30px",
                                                                marginRight: 25,
                                                                right: 0,
                                                                cursor: "pointer",
                                                            }}
                                                        ></i>
                                                    </a>
                                                ) : null}
                                                <div className="invalid-feedback">
                                                    {form.errors[item.name]}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="remember_me"
                                            name="checked"
                                            onClick={handleCheck}
                                            disabled={button.disabled}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="remember_me"
                                        >
                                            Remember me
                                        </label>
                                    </div>

                                    <SubmitButton
                                        disabled={button.disabled}
                                        text={button.text}
                                        text2="Don't have an account?"
                                        linkText="Register"
                                        route="/register"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <WhatsApp />
            </div>
            <Footer />
        </HelmetProvider>
    );
};

export default Login;
