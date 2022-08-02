import classNames from "classnames";
import React, { useState } from "react";
import FormHead from "../components/FormHead";
import { Link, useForm } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";

const ForgotCode = () => {
    Title("Verify-Code");
    const [disabled, setDisabled] = useState(false);

    const form = useForm({ code: "" });
    const submit = (e) => {
        e.preventDefault();
        setDisabled(true);
        form.post("/forgot-code", {
            onFinish: () => setDisabled(false),
            onError: (e) => {
                if (Object(e).hasOwnProperty("unknown")) {
                    new Swal({
                        title: "Error",
                        text: e.unknown,
                        icon: "error",
                    });
                }
            },
        });
    };

    const handleInput = (e) => {
        form.setData("code", e.target.value);
        form.post("/forgot-code/validate");
    };

    return (
        <div className="container center">
            <div className="card shadow-lg border-primary row col-10 offset-xs-1 col-md-5">
                <FormHead alt="Reset Password" />
                <div className="card-body">
                    <form onSubmit={submit} noValidate>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Reset Code
                            </label>
                            <input
                                type="number"
                                className={classNames("form-control", {
                                    "is-invalid": form.errors.code,
                                    "is-valid":
                                        form.hasErrors && !form.errors.code,
                                })}
                                id="code"
                                name="code"
                                placeholder="E.g. 09123"
                                onChange={handleInput}
                                disabled={disabled}
                                autoComplete="off"
                            />
                            <div className="invalid-feedback">
                                {form.errors.code}
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
                                    <span> Verify Code</span>
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

export default ForgotCode;
