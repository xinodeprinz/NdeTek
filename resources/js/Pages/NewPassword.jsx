import classNames from "classnames";
import React, { useState } from "react";
import FormHead from "../components/FormHead";
import { Link, useForm } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";

const NewPassword = () => {
    Title("New-Password");
    const [disabled, setDisabled] = useState(false);

    const form = useForm({ password: "" });
    const submit = (e) => {
        e.preventDefault();
        setDisabled(true);
        form.post("/new-password", {
            onFinish: () => setDisabled(false),
            onSuccess: () => {
                new Swal({
                    title: "Success",
                    text: "Password changed successfully",
                    icon: "success",
                });
                return setInterval(() => {
                    window.location.pathname = "/login";
                }, 2000);
            },
        });
    };

    const handleInput = (e) => {
        form.setData("password", e.target.value);
        form.post("/new-password/validate");
    };

    const showPassword = () => {
        const passField = document.getElementById("password");
        passField.type = passField.type === "password" ? "text" : "password";
    };

    return (
        <div className="container center">
            <div className="card shadow-lg border-primary row col-10 offset-xs-1 col-md-5">
                <FormHead alt="Reset Password" />
                <div className="card-body">
                    <form onSubmit={submit} noValidate>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                New Password
                            </label>
                            <div className="input-group">
                                <input
                                    type="password"
                                    className={classNames("form-control", {
                                        "is-invalid": form.errors.password,
                                        "is-valid":
                                            form.hasErrors &&
                                            !form.errors.password,
                                    })}
                                    id="password"
                                    name="password"
                                    autoComplete="off"
                                    onChange={handleInput}
                                    disabled={disabled}
                                />
                                <div
                                    className="input-group-text"
                                    onClick={showPassword}
                                >
                                    <i
                                        className="fas fa-lock"
                                        style={{ cursor: "pointer" }}
                                    ></i>
                                </div>
                                <div className="invalid-feedback">
                                    {form.errors.password}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button
                                type="submit"
                                className="btn btn-ndetek w-100 text-capitalize"
                                disabled={disabled}
                            >
                                {disabled ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        <span> loading...</span>
                                    </>
                                ) : (
                                    <span> Change Password</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <WhatsApp />
        </div>
    );
};

export default NewPassword;
