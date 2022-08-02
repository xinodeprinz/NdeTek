import React from "react";

const TableModal = ({ id, title, isPaper = true, data }) => {
    return (
        <div
            className="modal fade"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            id={id}
        >
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-capitalize text-ndetek">
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="text-ndetek text-capitalize">
                                        <th>#</th>
                                        {!isPaper ? (
                                            <>
                                                <th>Method</th>
                                                <th>Phone number</th>
                                            </>
                                        ) : null}
                                        <th>
                                            {isPaper ? "Name" : "Amount (FCFA)"}
                                        </th>
                                        <th>
                                            {isPaper ? "Uploaded at" : "Date"}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, key) => {
                                        const date = new Date(item.created_at);
                                        return (
                                            <tr key={key}>
                                                <td>{++key}</td>
                                                {!isPaper ? (
                                                    <>
                                                        <td>{item.method}</td>
                                                        <td>
                                                            {item.phone_number}
                                                        </td>
                                                    </>
                                                ) : null}
                                                <td>
                                                    {isPaper
                                                        ? item.name
                                                        : item.amount}
                                                </td>
                                                <td>{date.toDateString()}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableModal;
