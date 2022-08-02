import classNames from "classnames";
import React from "react";

const CommentModal = ({ text, handleInput, disabled, form, handleSubmit }) => {
    return (
        <div
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            id="comment_modal"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-capitalize text-ndetek">
                            Create a {text}
                        </h5>
                        <button
                            id="close_comm"
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-3">
                                <label htmlFor="comment" className="form-label">
                                    {text}
                                </label>
                                <textarea
                                    name="body"
                                    id="body"
                                    cols="30"
                                    rows="10"
                                    autoComplete="off"
                                    className={classNames(
                                        "form-control form-control-sm",
                                        {
                                            "is-invalid": form.errors.body,
                                            "is-valid":
                                                form.hasErrors &&
                                                !form.errors.body,
                                        }
                                    )}
                                    onChange={(e) =>
                                        handleInput(e.target.value)
                                    }
                                    disabled={disabled}
                                ></textarea>
                                <div className="invalid-feedback">
                                    {form.errors.body}
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
                                            <span> Please Wait...</span>
                                        </>
                                    ) : (
                                        <span>Post {text}</span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;
