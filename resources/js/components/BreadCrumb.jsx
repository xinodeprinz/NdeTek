import { Link } from "@inertiajs/inertia-react";
import React from "react";

const BreadCrumb = ({ mainText, currentText, text, url }) => {
    return (
        <nav
            id="breadcrumb"
            className="bg-ndetek py-2 text-white"
            aria-label="breadcrumb"
        >
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={url}>{mainText}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {currentText}
                    </li>
                </ol>
                <h4 className="text-white text-capitalize">{text}</h4>
            </div>
        </nav>
    );
};

export default BreadCrumb;
