import { range } from "lodash";
import React from "react";

const Paginator = ({ length, handlePaginate, current }) => {
    let myArray = [];
    for (var num in range(0, length)) {
        myArray.push(Number(num) + 1);
    }
    const prev_disabled = current === 1 ? true : false;
    const next_disabled = current === myArray.length ? true : false;
    return (
        <nav aria-label="NdeTek Paginator">
            <div className="container">
                <ul className="pagination justify-content-center">
                    <li
                        className={`page-item ${
                            prev_disabled ? "disabled" : ""
                        }`}
                    >
                        <a
                            href="#"
                            className="page-link"
                            onClick={() => handlePaginate(current - 1)}
                        >
                            Previous
                        </a>
                    </li>
                    {myArray.map((e, k) => {
                        const active = e === current ? "active" : "";
                        return (
                            <li className={`page-item ${active}`} key={k}>
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={() => handlePaginate(e)}
                                >
                                    {e}
                                </a>
                            </li>
                        );
                    })}

                    <li
                        className={`page-item ${
                            next_disabled ? "disabled" : ""
                        }`}
                    >
                        <a
                            className="page-link"
                            href="#"
                            onClick={() => handlePaginate(current + 1)}
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Paginator;
