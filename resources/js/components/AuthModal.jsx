import { useForm } from "@inertiajs/inertia-react";
import classNames from "classnames";
import React, { useState } from "react";
import Swal from "sweetalert2";

const AuthModal = ({ categories }) => {
    // const [error, setError] = useState({});
    const [disabled, setDisabled] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [failed, setFailed] = useState(false);

    const form = useForm({
        username: "",
        password: "",
    });

    const handleInput = (e) => {
        form.setData(e.target.name, e.target.value);
        form.post("/bueaty/validate");
    };

    const handleSubmit = (e) => {
        setDisabled(true);
        e.preventDefault();
        form.post(isLogin ? "/bueaty/login" : "/bueaty/register", {
            onError: (e) => {
                setDisabled(false);
                if (Object(e).hasOwnProperty("failed")) setFailed(true);
            },
            onSuccess: () => {
                setDisabled(false);
                window.location.reload(); //not the best
            },
        });
    };
    return (
        <div
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            id="auth-modal"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-capitalize text-ndetek">
                            {isLogin ? "Login" : "Create Account"}
                        </h5>
                        <button
                            id="close"
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {failed ? (
                            <div
                                className="alert alert-danger alert-dismissible fade show"
                                role="alert"
                            >
                                <strong>Login failed!</strong> Invalid
                                credentials.
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                            </div>
                        ) : null}
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-3">
                                <label
                                    // htmlFor="username"
                                    className="form-label"
                                >
                                    Username{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    disabled={disabled}
                                    value={form.data.username}
                                    type="text"
                                    className={classNames("form-control", {
                                        "is-invalid": form.errors.username,
                                        "is-valid":
                                            form.hasErrors &&
                                            !form.errors.username,
                                    })}
                                    // id="username"
                                    name="username"
                                    placeholder="Username"
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                                <div className="invalid-feedback">
                                    {form.errors.username}
                                </div>
                            </div>
                            {isLogin ? null : (
                                <div className="mb-3">
                                    <label
                                        htmlFor="photo"
                                        className="form-label"
                                    >
                                        Profile Photo
                                    </label>
                                    <input
                                        disabled={disabled}
                                        className={classNames("form-control", {
                                            "is-invalid": form.errors.photo,
                                            "is-valid":
                                                form.hasErrors &&
                                                !form.errors.photo,
                                        })}
                                        name="photo"
                                        type="file"
                                        id="photo"
                                        accept=".jpg,.png,.jpeg"
                                        onChange={handlePhoto}
                                    />
                                    <div className="invalid-feedback">
                                        {form.errors.photo}
                                    </div>
                                </div>
                            )}

                            <div className="mb-3">
                                <label
                                    // htmlFor="password"
                                    className="form-label"
                                >
                                    Password{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    disabled={disabled}
                                    value={form.data.password}
                                    type="password"
                                    className={classNames("form-control", {
                                        "is-invalid": form.errors.password,
                                        "is-valid":
                                            form.hasErrors &&
                                            !form.errors.password,
                                    })}
                                    // id="password"
                                    name="password"
                                    placeholder="password"
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                                <div className="invalid-feedback">
                                    {form.errors.password}
                                </div>
                            </div>

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
                                        <span> Loading...</span>
                                    </>
                                ) : (
                                    <span>
                                        {isLogin ? "Login" : "Create Account"}
                                    </span>
                                )}
                            </button>
                            <div className="text-center mt-3">
                                <a href="/register">Create Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
