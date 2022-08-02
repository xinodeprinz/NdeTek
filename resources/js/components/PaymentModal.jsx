import { useForm } from "@inertiajs/inertia-react";
import classNames from "classnames";
import React, { useState } from "react";
import Swal from "sweetalert2";

const PaymentModal = ({
    title,
    buttonText,
    isWithdrawal = true,
    balance = null,
}) => {
    const [loading, setLoading] = useState("Please wait ...");
    const [receivable, setReceivable] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const form = useForm({
        type: isWithdrawal ? "withdrawal" : "support",
        amount: null,
        phone_number: null,
        max: balance,
    });
    const handleInput = (e) => {
        if (isWithdrawal) {
            if (e.target.name === "amount") {
                setReceivable(Math.round(0.9 * Number(e.target.value)));
            }
        }
        form.setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);
        setLoading("Pending ...");
        form.post(isWithdrawal ? "/process-withdrawal" : "/process-support", {
            onError: (e) => {
                if (Object(e).hasOwnProperty("failed")) {
                    new Swal({
                        title: "Failed",
                        text: e.failed,
                        icon: "error",
                    });
                }
            },
            onSuccess: () => {
                document.getElementById("close").click();
                new Swal({
                    title: "Success",
                    text: `${
                        isWithdrawal
                            ? "Withdrawal successful"
                            : "Transaction successful!!\nThank you for supporting NdeTek. God bless you for your kindness. Amen."
                    }`,
                    icon: "success",
                });
                return setInterval(
                    () => {
                        window.location.reload();
                    },
                    isWithdrawal ? 3000 : 10000
                );
            },
            onFinish: () => setDisabled(false),
        });
    };
    return (
        <div
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            id="modal"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-capitalize text-ndetek">
                            {title}
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
                        <div className="d-flex justify-content-between">
                            <div>
                                <img
                                    src="/storage/images/mtn.jpg"
                                    alt=""
                                    className="img-fluid w-25"
                                />
                                <img
                                    src="/storage/images/orange.jpg"
                                    alt=""
                                    className="img-fluid w-25"
                                />
                            </div>
                            <img
                                src="/storage/images/ndetek-logo.png"
                                alt=""
                                className="img-fluid w-25"
                            />
                        </div>
                        {receivable && receivable >= 135 ? (
                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <span>Amount to be received:</span>
                                <span className="fw-bold">
                                    {receivable} FCFA
                                </span>
                            </div>
                        ) : null}
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="input-group my-3">
                                <span className="input-group-text">
                                    Amount:
                                </span>
                                <input
                                    type="number"
                                    className={classNames("form-control", {
                                        "is-invalid": form.errors.amount,
                                        "is-valid":
                                            form.hasErrors &&
                                            !form.errors.amount,
                                    })}
                                    onChange={handleInput}
                                    placeholder="E.g. 5000"
                                    aria-label="Amount"
                                    aria-describedby="Support Amount"
                                    name="amount"
                                    disabled={disabled}
                                    autoComplete="off"
                                />
                                <span className="input-group-text">FCFA</span>
                                <div className="invalid-feedback">
                                    {form.errors.amount}
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Tel:</span>
                                <span className="input-group-text">+237</span>
                                <input
                                    type="number"
                                    className={classNames("form-control", {
                                        "is-invalid": form.errors.phone_number,
                                        "is-valid":
                                            form.hasErrors &&
                                            !form.errors.phone_number,
                                    })}
                                    onChange={handleInput}
                                    placeholder="E.g. 678909876"
                                    aria-label="Phone Number"
                                    aria-describedby="Phone Number"
                                    name="phone_number"
                                    disabled={disabled}
                                    autoComplete="off"
                                />
                                <div className="invalid-feedback">
                                    {form.errors.phone_number}
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
                                        <span> {loading}</span>
                                    </>
                                ) : (
                                    <span> {buttonText}</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
