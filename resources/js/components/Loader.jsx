import React from "react";

const Loader = ({ show = false, text = "" }) => {
    return (
        <span>
            {show ? (
                <div className="ndetek-loader text-center">
                    <div className="d-flex align-items-center">
                        <div
                            className="spinner-border text-ndetek"
                            role="status"
                        ></div>
                        <span style={{ marginLeft: 5 }}> {text}</span>
                    </div>
                </div>
            ) : null}
        </span>
    );
};

export default Loader;
