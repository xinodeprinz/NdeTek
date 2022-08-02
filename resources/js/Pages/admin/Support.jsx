import React from "react";
import AdminHead from "../../components/AdminHead";
import AdminSidebar from "../../components/AdminSidebar";
import Title from "../../components/Title";
import { Adsense } from "@ctrl/react-adsense";

const Support = ({ transactions }) => {
    Title("Admin");

    return (
        <div className="d-lg-flex">
            <AdminSidebar />
            {/* <Adsense
                client="ca-pub-2557977792147621"
                slot="8584943081"
                style={{ width: 500, height: 300 }}
                format=""
            /> */}

            <main id="admin-main">
                <AdminHead />
                <div className="container mt-5 px-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span>
                            Number of transactions:{" "}
                            <span className="text-ndetek fw-bold">
                                {transactions.length}
                            </span>
                        </span>
                    </div>
                    <div className="table responsive">
                        <table className="table table-striped table-bordered admin-table">
                            <thead className="text-ndetek text-capitalize">
                                <tr>
                                    <th>#</th>
                                    <th>phone number</th>
                                    <th>amount (FCFA)</th>
                                    <th>method</th>
                                    <th>date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, key) => {
                                    const date = new Date(
                                        transaction.created_at
                                    );
                                    return (
                                        <tr key={key}>
                                            <td>{++key}</td>
                                            <td>{transaction.phone_number}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{transaction.method}</td>
                                            <td>{date.toDateString()}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Support;
