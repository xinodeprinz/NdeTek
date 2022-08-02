import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Paginator from "../components/Paginator";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";
import { Adsense } from "@ctrl/react-adsense";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { handleLike } from "../Data/functions";
import AuthModal from "../components/AuthModal";

const Blog = (props) => {
    // Title("Blogs");
    const [blogs, setBlogs] = useState(props.blogs);
    const [latest, setLatest] = useState(props.latest);
    const [categories, setCategories] = useState(props.categories);
    const [category, setCategory] = useState(props.category);
    const [isFetching, setIsFetching] = useState(false);
    const [paginatorLength, setPaginatorLength] = useState(
        props.paginator_length
    );
    const [current, setCurrent] = useState(1);
    const [alert, setAlert] = useState(
        "No blog post is available now. Please check again later."
    );

    const handlePaginate = (pag_id) => {
        const cat_id = category.id;
        axios.get(`/blogs/paginate/${cat_id}/${pag_id}`).then((res) => {
            const { current } = res.data;
            setBlogs(res.data.blogs);
            setCurrent(Number(current));
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>NdeTek | Blog Posts</title>
                <meta
                    name="description"
                    content="Get updates on technology, football, entertainment, politics, education and many more."
                />
                <link rel="canonical" href="blogs/technology" />
            </Helmet>
            <Navbar />
            <BreadCrumb
                mainText="Home"
                currentText="Blog"
                text="Blog Posts"
                url="/"
            />
            <button
                id="show-auth-modal"
                data-bs-toggle="modal"
                data-bs-target="#auth-modal"
                hidden
            ></button>
            <AuthModal />
            <div id="blogs" className="mt-5 mb-3">
                <div className="container">
                    {isFetching ? (
                        <div className="ndetek-loader text-center">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            ></div>
                        </div>
                    ) : null}
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="mb-5" id="small-search">
                                <form action="" method="GET">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Search for blog post"
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

                            {blogs.length > 0 ? (
                                blogs.map((blog, key) => (
                                    <BlogCard
                                        blog={blog}
                                        m="mb-3"
                                        key={key}
                                        handleLike={handleLike}
                                    />
                                ))
                            ) : (
                                <>
                                    <div className="alert alert-info text-center my-4">
                                        {alert}
                                    </div>
                                    {/* <Adsense
                                        client="ca-pub-2557977792147621"
                                        slot="8584943081"
                                        style={{ width: 500, height: 300 }}
                                        format=""
                                    /> */}
                                </>
                            )}
                            {blogs.length === 0 ? null : (
                                <Paginator
                                    length={paginatorLength}
                                    handlePaginate={handlePaginate}
                                    current={current}
                                />
                            )}
                        </div>
                        <div className="col-lg-4">
                            <Sidebar
                                categories={categories}
                                category={category}
                                placeholder="Search for blogs"
                                isPaper={false}
                                blogs={latest}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <WhatsApp />
            <Footer />
        </HelmetProvider>
    );
};

export default Blog;
