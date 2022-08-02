import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import AdminHead from "../../components/AdminHead";
import AdminSidebar from "../../components/AdminSidebar";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import { Adsense } from "@ctrl/react-adsense";

const BlogPosts = ({ blogs }) => {
    Title("Admin");
    const [loaderInfo, setLoaderInfo] = useState({
        show: false,
        text: "",
    });

    const form = useForm();

    const handleDelete = (id) => {
        setLoaderInfo({
            show: true,
            text: `Deleting ...`,
        });
        form.delete(`/admin/delete-blog/${id}`, {
            onSuccess: () => {
                setLoaderInfo({ show: false, text: "" });
                new Swal({
                    title: "Success",
                    text: "Blog post deleted successfully",
                    icon: "success",
                });
            },
            onError: () => alert("An error occured"),
        });
    };

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
                            Number of blog posts:{" "}
                            <span className="text-ndetek fw-bold">
                                {blogs.length}
                            </span>
                        </span>
                        <Loader show={loaderInfo.show} text={loaderInfo.text} />
                    </div>
                    <div className="table responsive">
                        <table className="table table-striped table-bordered admin-table">
                            <thead className="text-ndetek text-capitalize">
                                <tr>
                                    <th>#</th>
                                    <th>title</th>
                                    <th>category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((blog, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{++key}</td>
                                            <td>{blog.title}</td>
                                            <td>{blog.category}</td>
                                            <td className="d-flex">
                                                <a
                                                    className="btn btn-success btn-sm"
                                                    style={{ marginRight: 5 }}
                                                    href={blog.uri}
                                                    target="_blank"
                                                >
                                                    <span> View</span>
                                                </a>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        handleDelete(blog.id)
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

export default BlogPosts;
