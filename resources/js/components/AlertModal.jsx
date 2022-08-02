import React from "react";

const AlertModal = ({ title, text, buttonText, func }) => {
    return (
        <div
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            id="alertModal"
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
                    <div className="modal-body">{text}</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={func}
                        >
                            {buttonText}
                        </button>
                        <button
                            type="button"
                            className="btn btn-ndetek"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;
