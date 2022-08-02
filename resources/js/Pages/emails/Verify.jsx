import classNames from "classnames";
import React, { useState } from "react";
import FormHead from "../../components/FormHead";
import { Link, useForm } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import Title from "../../components/Title";
import WhatsApp from "../../components/WhatsApp";

const Verify = ({ email }) => {
    Title("verify-email");
    const [disabled, setDisabled] = useState(false);

    const form = useForm({ code: null });
    const submit = (e) => {
        e.preventDefault();
        setDisabled(true);
        form.post("/email/verify", {
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
        form.post("/email/verify/validate");
    };

    const resendEmail = () => {
        form.get("/email/resend", {
            onSuccess: () => {
                new Swal({
                    title: "Success",
                    text: "Email resent successfully.",
                    icon: "success",
                });
            },
        });
    };
    return (
        <div className="container center">
            <div className="card shadow-lg border-primary row col-10 offset-xs-1 col-md-5">
                <FormHead alt="Verify Email" />
                <div className="card-body">
                    <form onSubmit={submit} noValidate>
                        <div className="alert alert-info text-center">
                            An email verification code has been sent to
                            {` ${email}`}. Please also check inside your{" "}
                            <strong>Spam Box</strong> for this Email.
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="verification-code"
                                className="form-label"
                            >
                                Verification Code
                            </label>
                            <input
                                type="number"
                                className={classNames("form-control", {
                                    "is-invalid": form.errors.code,
                                    "is-valid":
                                        form.hasErrors && !form.errors.code,
                                })}
                                id="verification-code"
                                name="code"
                                placeholder="E.g. 23096"
                                onChange={handleInput}
                                disabled={disabled}
                                maxLength="5"
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
                                    <span> Verify Email</span>
                                )}
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <a href="#" className="card-link" onClick={resendEmail}>
                            Resend verification code
                        </a>
                    </div>
                </div>
            </div>
            <WhatsApp />
        </div>
    );
};

export default Verify;
