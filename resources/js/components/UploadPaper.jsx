import { useForm } from "@inertiajs/inertia-react";
import classNames from "classnames";
import React, { useState } from "react";
import Swal from "sweetalert2";

const UploadPaper = ({ categories }) => {
    // const [error, setError] = useState({});
    const [disabled, setDisabled] = useState(false);

    const form = useForm({
        category: "",
        name: "",
        paper: "",
    });

    const handleInput = (e) => {
        form.setData(e.target.name, e.target.value);
    };

    const handlePaper = (e) => {
        const image = e.target.files[0];
        const extension = image.name.split(".").pop();
        if (extension !== "pdf") {
            return form.setError("paper", "Only PDFs are allowed");
        }
        form.setData("paper", image);
    };

    const handleSubmit = (e) => {
        setDisabled(true);
        e.preventDefault();
        form.post("/upload-paper", {
            onError: (e) => {
                setDisabled(false);
                if (e.hasOwnProperty("failed")) {
                    return new Swal({
                        title: "Error",
                        text: e.failed,
                        icon: "error",
                    });
                }
            },
            onSuccess: () => {
                document.getElementById("close").click();
                new Swal({
                    title: "Success",
                    text: "Paper uploaded successfully!!\n Your account will be credited with 25 FCFA only if the paper is approved.",
                    icon: "success",
                });
                return setInterval(() => {
                    window.location.reload();
                }, 10000);
            },
        });
    };
    return (
        <div
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            id="paper-modal"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-capitalize text-ndetek">
                            Paper Upload
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
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-3">
                                <label
                                    htmlFor="category"
                                    className="form-label"
                                >
                                    Category
                                </label>
                                <select
                                    disabled={disabled}
                                    className={classNames("form-select", {
                                        "is-invalid": form.errors.category,
                                        "is-valid":
                                            form.hasErrors &&
                                            !form.errors.category,
                                    })}
                                    aria-label="Category"
                                    id="category"
                                    name="category"
                                    onChange={handleInput}
                                >
                                    <option>Choose ...</option>
                                    {categories.map((category, key) => (
                                        <option key={key} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="invalid-feedback">
                                    {form.errors.category}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    disabled={disabled}
                                    type="text"
                                    className={classNames("form-control", {
                                        "is-invalid": form.errors.name,
                                        "is-valid":
                                            form.hasErrors && !form.errors.name,
                                    })}
                                    id="name"
                                    name="name"
                                    placeholder="The name of the paper"
                                    onChange={handleInput}
                                    autoComplete="off"
                                />
                                <div className="invalid-feedback">
                                    {form.errors.name}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="paper" className="form-label">
                                    Paper (PDF Only)
                                </label>
                                <input
                                    disabled={disabled}
                                    className={classNames("form-control", {
                                        "is-invalid": form.errors.paper,
                                        "is-valid":
                                            form.hasErrors &&
                                            !form.errors.paper,
                                    })}
                                    name="paper"
                                    type="file"
                                    id="paper"
                                    accept=".pdf"
                                    onChange={handlePaper}
                                />
                                <div className="invalid-feedback">
                                    {form.errors.paper}
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
                                        <span> Uploading ...</span>
                                    </>
                                ) : (
                                    <span> Upload paper</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPaper;
