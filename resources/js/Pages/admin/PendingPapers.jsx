import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import AdminHead from "../../components/AdminHead";
import AdminSidebar from "../../components/AdminSidebar";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import { Adsense } from "@ctrl/react-adsense";

const PendingPapers = ({ papers }) => {
    Title("Admin");
    const [loaderInfo, setLoaderInfo] = useState({
        show: false,
        text: "",
    });

    const form = useForm();

    const handleApprove = (id) => {
        setLoaderInfo({
            show: true,
            text: `Approving ...`,
        });
        form.get(`/admin/approve-paper/${id}`, {
            onSuccess: () => {
                setLoaderInfo({ show: false, text: "" });
                new Swal({
                    title: "Success",
                    text: "Approval successful",
                    icon: "success",
                });
            },
            onError: () => alert("An error occured"),
        });
    };

    const handleDelete = (id) => {
        setLoaderInfo({
            show: true,
            text: `Deleting ...`,
        });
        form.delete(`/admin/delete-pending-paper/${id}`, {
            onSuccess: () => {
                setLoaderInfo({ show: false, text: "" });
                new Swal({
                    title: "Success",
                    text: "Paper deleted successfully",
                    icon: "success",
                });
            },
            onError: () => alert("An error occured"),
        });
    };

    return (
        <div className="d-lg-flex">
            <button
                hidden
                id="showAlert"
                data-bs-toggle="modal"
                data-bs-target="#alertModal"
            ></button>
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
                            Number of papers:{" "}
                            <span className="text-ndetek fw-bold">
                                {papers.length}
                            </span>
                        </span>
                        <Loader show={loaderInfo.show} text={loaderInfo.text} />
                    </div>
                    <div className="table responsive">
                        <table className="table table-striped table-bordered admin-table">
                            <thead className="text-ndetek text-capitalize">
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>category</th>
                                    <th>user</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {papers.map((paper, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{++key}</td>
                                            <td>{paper.name}</td>
                                            <td>{paper.category}</td>
                                            <td>{paper.username}</td>
                                            <td className="d-flex">
                                                <a
                                                    className="btn btn-success btn-sm"
                                                    style={{ marginRight: 5 }}
                                                    href={`/storage/${paper.uri}${paper.name}`}
                                                    target="_blank"
                                                >
                                                    <span> View</span>
                                                </a>
                                                <button
                                                    className="btn btn-ndetek btn-sm"
                                                    style={{ marginRight: 5 }}
                                                    onClick={() =>
                                                        handleApprove(paper.id)
                                                    }
                                                >
                                                    <span> Approve</span>
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        handleDelete(paper.id)
                                                    }
                                                >
                                                    <i className="fas fa-trash"></i>
                                                    <span> Delete</span>
                                                </button>
                                            </td>
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

export default PendingPapers;
