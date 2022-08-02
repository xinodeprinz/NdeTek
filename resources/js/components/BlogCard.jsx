import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import timeSince from "../Data/timeSince";

const BlogCard = ({ blog, isSidebar = false, handleLike }) => {
    const form = useForm();

    const date = new Date(blog.created_at);

    const body = `${String(blog.sub_text).substr(0, 70)}...`;

    return (
        <>
            <div
                className={`card bg-white shadow mb-3 ${
                    isSidebar ? "mb-3" : "blog-card"
                }`}
            >
                <div className="row g-0 mb-0 pb-0">
                    <div className={`col-12 ${isSidebar ? "" : "col-sm-4"}`}>
                        <img
                            className={`img-fluid rounded-start ${
                                isSidebar ? "w-100" : "blog-card img-h-200"
                            }`}
                            src={`/storage/${blog.image}`}
                            alt={blog.title}
                        />
                    </div>
                    <div className={`col-12 ${isSidebar ? "" : "col-sm-8"}`}>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase fw-bold">
                                <Link
                                    href={`/blog/${
                                        blog.id
                                    }/${blog.title.replaceAll(" ", "-")}`}
                                    className="text-decoration-none blog-title text-ndetek"
                                >
                                    {blog.title}
                                </Link>
                            </h5>
                            <div className="card-subtitle text-muted">
                                {timeSince(date)}
                            </div>
                            <p className="card-text mt-2">
                                <span
                                    dangerouslySetInnerHTML={{ __html: body }}
                                />
                            </p>
                            <div className="card-text d-flex justify-content-between">
                                <div
                                    className="icons"
                                    onClick={() => handleLike(blog.id, form)}
                                >
                                    <small className="text-muted">
                                        <i
                                            className={`${
                                                blog.liked ? "fas" : "far"
                                            } fa-thumbs-up`}
                                        ></i>
                                        <span> {blog.likes} likes</span>
                                    </small>
                                </div>
                                <Link
                                    href={`/blog/${
                                        blog.id
                                    }/${blog.title.replaceAll(" ", "-")}`}
                                    className="text-decoration-none icons"
                                >
                                    <small className="text-muted">
                                        <i className="far fa-comments"></i>
                                        <span> {blog.comments} comments</span>
                                    </small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
