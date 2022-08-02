import React from "react";
import BlogCard from "./BlogCard";
import { Adsense } from "@ctrl/react-adsense";
import { handleLike } from "../Data/functions";
import AuthModal from "./AuthModal";
import { Link } from "@inertiajs/inertia-react";

const Sidebar = ({
    categories,
    category,
    isPaper = true,
    placeholder,
    main_cat,
    blogs,
}) => {
    return (
        <>
            <button
                id="show-auth-modal"
                data-bs-toggle="modal"
                data-bs-target="#auth-modal"
                hidden
            ></button>
            <AuthModal />
            <div className="card shadow-lg">
                <div className="card-body">
                    <div id="big-search">
                        <div className="fs-4 text-ndetek fw-bold mb-3">
                            Search
                        </div>
                        <form action="" method="GET">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder={placeholder}
                                    name="search"
                                    // onChange={(e) => handleSearch(e.target.value)}
                                />
                                <button className="btn btn-primary">
                                    <i className="fas fa-search"></i>
                                    <span> Search</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* <Adsense
                        client="ca-pub-2557977792147621"
                        slot="6089839359"
                        data-ad-layout="in-article"
                        data-ad-format="fluid"
                        style={{
                            width: 500,
                            height: 300,
                            display: "block",
                            textAlign: "center",
                        }}
                    /> */}

                    <div className="fs-4 text-ndetek my-3 fw-bold">
                        Categories
                    </div>
                    <div className="list-group list-group-numbered">
                        {categories.map((cat, key) => {
                            const active =
                                cat.id === category.id ? "active disabled" : "";
                            return (
                                <Link
                                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${active}`}
                                    key={key}
                                    href={`/${
                                        isPaper
                                            ? `papers/${main_cat.replaceAll(
                                                  " ",
                                                  "-"
                                              )}`
                                            : "blogs"
                                    }/${cat.name.replaceAll(" ", "-")}`}
                                    // onClick={() => handleCategory(cat.id)}
                                >
                                    <div className="ms-2 me-auto">
                                        <div>{cat.name}</div>
                                    </div>
                                    <span
                                        className={
                                            active
                                                ? "badge bg-white text-ndetek rounded-pill"
                                                : "badge bg-primary rounded-pill"
                                        }
                                    >
                                        {cat.count}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="fs-4 text-ndetek my-3 fw-bold text-capitalize">
                        Recent Posts
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
                </div>
            </div>
        </>
    );
};

export default Sidebar;
