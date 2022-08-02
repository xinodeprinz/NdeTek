import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { handleLike } from "../Data/functions";
import BlogCard from "./BlogCard";
import PaperCard from "./PaperCard";

const SingleBlogSidebar = ({ blogs, papers }) => {
    return (
        <>
            <div className="card shadow-lg">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-4 text-ndetek my-3 fw-bold text-capitalize">
                            Recent Blog Posts
                        </div>
                        <Link href="/blogs/technology" className="card-link">
                            View More
                        </Link>
                    </div>
                    <div className="row">
                        {blogs.map((blog, key) => (
                            <div className="col-sm-6 col-lg-12" key={key}>
                                <BlogCard
                                    blog={blog}
                                    isSidebar={true}
                                    handleLike={handleLike}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-4 text-ndetek my-3 fw-bold text-capitalize">
                            Recent Papers
                        </div>
                        <Link
                            href="/papers/gce/gce-advanced-level"
                            className="card-link"
                        >
                            View More
                        </Link>
                    </div>
                    <div className="row">
                        {papers.map((paper, key) => (
                            <div className="col-sm-6 col-lg-12 mb-3" key={key}>
                                <PaperCard paper={paper} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogSidebar;
