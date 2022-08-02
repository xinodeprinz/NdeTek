import React from "react";
import { Link } from "@inertiajs/inertia-react";

const SubmitButton = ({ disabled = false, text, text2, route, linkText }) => {
    return (
        <>
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
                        <span>{` ${text}`}</span>
                    </>
                ) : (
                    text
                )}
            </button>
            <div className="mt-2 text-center">
                {`${text2} `}
                <Link href={route} className="card-link text-ndetek">
                    {linkText}
                </Link>
            </div>
        </>
    );
};

export default SubmitButton;
