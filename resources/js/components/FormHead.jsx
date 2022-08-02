import { Link } from "@inertiajs/inertia-react";
import React from "react";

const FormHead = ({ alt }) => {
    return (
        <div className="card-header bg-white text-ndetek fw-bold">
            <Link href="/">
                <img
                    src="/storage/images/ndetek-logo.png"
                    width="150"
                    alt="NdeTek Logo"
                    className="img-fluid"
                />
            </Link>
        </div>
    );
};

export default FormHead;
