import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SingleBlogSidebar from "../components/SingleBlogSidebar";
import CommentModal from "../components/CommentModal";
import Title from "../components/Title";
import AuthModal from "../components/AuthModal";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import Paginator from "../components/Paginator";
import WhatsApp from "../components/WhatsApp";
import timeSince from "../Data/timeSince";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { handleLike } from "../Data/functions";

const BlogSingle = ({
    blog,
    latest_blogs,
    latest_papers,
    comments,
    paginator_length,
    comment_count,
}) => {
    // Title(blog.title);
    const date = new Date(blog.created_at);
    const [likes, setLikes] = useState(blog.likes);
    const [dislikes, setDislikes] = useState(blog.dislikes);
    const [loves, setLoves] = useState(blog.loves);

    const [my_comments, setComments] = useState(comments);
    const [paginatorLength, setPaginatorLength] = useState(paginator_length);
    const [current, setCurrent] = useState(1);
    const form = useForm();

    const likeForm = useForm();

    const [text, setText] = useState("Comment");

    const [disabled, setDisabled] = useState(false);

    const [domainName, setDomainName] = useState("");

    const commentForm = useForm({
        body: "",
        id: blog.id,
    });

    const handleInput = (value) => {
        commentForm.setData("body", value);
    };

    useEffect(() => {
        document.querySelectorAll("oembed[url]").forEach((element) => {
            iframely.load(element, element.attributes.url.value);
        });

        const { protocol, host } = window.location;
        setDomainName(`${protocol}//${host}`);
    }, [document, iframely, window]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);
        commentForm.post("/comment", {
            onSuccess: (e) => {
                setComments(e.props.comments);
                document.getElementById("close_comm").click();
            },
            onFinish: () => setDisabled(false),
        });
    };

    const showModal = () => {
        commentForm.get("/is-auth", {
            onError: (e) => {
                // console.log(e);
                if (e.hasOwnProperty("login")) {
                    document.getElementById("show-auth-modal").click();
                }
            },
            onSuccess: () => document.getElementById("show_comment").click(),
            preserveScroll: true,
        });
    };

    const handleCommentLove = (id) => {
        form.get(`/comment-love/${id}`, {
            onError: (e) => {
                if (Object(e).hasOwnProperty("login"))
                    document.getElementById("show-auth-modal").click();
            },
            preserveScroll: true,
        });
    };

    const handlePaginate = (pag_id) => {
        axios.get(`/bueaty/paginate/${pag_id}/${blog.id}`).then((res) => {
            const { current, coms } = res.data;
            setComments(coms);
            setCurrent(Number(current));
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>{blog.title}</title>
                <meta name="description" content={blog.sub_text} />
                <meta name="twitter:card" content={blog.title} />
                <meta
                    name="twitter:image"
                    content={`${domainName}/storage/${blog.image}`}
                />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:creator" content="NdeTek" />
                <meta name="twitter:site" content="/" />
                <meta name="twitter:description" content={blog.sub_text} />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`${domainName}/blog/${
                        blog.id
                    }/${blog.title.replaceAll(" ", "-")}`}
                />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.sub_text} />
                <meta
                    property="og:image"
                    content={`${domainName}/storage/${blog.image}`}
                />
                <meta
                    property="og:keywords"
                    content={`NdeTek, ${blog.title}, ${blog.sub_text}`}
                />
                <meta
                    property="og:image:secure_url"
                    content={`${domainName}/storage/${blog.image}`}
                />
                <link
                    rel="image_src"
                    href={`${domainName}/storage/${blog.image}`}
                />
                <meta name="author" content={blog.title} />
                <meta name="language" content="English" />
                <link
                    rel="canonical"
                    href={encodeURI(
                        `${domainName}/blogs/${blog.id}/${blog.title.replaceAll(
                            " ",
                            "-"
                        )}`
                    )}
                />
            </Helmet>
            <button
                data-bs-toggle="modal"
                data-bs-target="#comment_modal"
                id="show_comment"
                hidden
            ></button>
            <button
                id="show-auth-modal"
                data-bs-toggle="modal"
                data-bs-target="#auth-modal"
                hidden
            ></button>
            <AuthModal />
            <CommentModal
                text={text}
                handleInput={handleInput}
                disabled={disabled}
                form={commentForm}
                handleSubmit={handleSubmit}
            />
            <Navbar />
            <BreadCrumb
                mainText="Home"
                currentText="Blog"
                text={blog.title}
                url="/"
            />
            <div id="blogs" className="mt-5 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card shadow-lg mb-3">
                                <img
                                    src={`/storage/${blog.image}`}
                                    className="card-img-top"
                                    alt={blog.title}
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-around">
                                        <span className="card-subtitle text-ndetek">
                                            <i className="far fa-clock"></i>
                                            <span className="ms-1">
                                                {timeSince(date)}
                                            </span>
                                        </span>
                                        <span
                                            className="card-subtitle text-ndetek"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                handleLike(blog.id, likeForm)
                                            }
                                        >
                                            <i
                                                className={`${
                                                    blog.liked ? "fas" : "far"
                                                } fa-thumbs-up`}
                                            ></i>
                                            <span className="ms-1">
                                                {blog.likes} likes
                                            </span>
                                        </span>
                                        <span className="card-subtitle text-ndetek">
                                            <i className="far fa-comments"></i>
                                            <span className="ms-1">
                                                {blog.comments} comments
                                            </span>
                                        </span>
                                    </div>
                                    {/* <h2 className="card-title text-ndetek lh-base fs-3">
                                        {blog.title}
                                    </h2> */}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: blog.body,
                                        }}
                                    />
                                </div>
                            </div>

                            <div id="comments" className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <div className="fs-4 text-ndetek">
                                        {comment_count}{" "}
                                        {Number(comment_count) === 1
                                            ? "comment"
                                            : "comments"}
                                    </div>
                                    <button
                                        className="btn btn-ndetek"
                                        id="show_comment"
                                        onClick={showModal}
                                    >
                                        Add a comment
                                    </button>
                                </div>
                                {my_comments.map((com, key) => {
                                    const date = new Date(com.created_at);
                                    return (
                                        <div className="d-flex my-3" key={key}>
                                            <img
                                                src={`/storage/${com.user.photo}`}
                                                alt=""
                                                className="rounded-circle img-fluid img-ndetek"
                                            />
                                            <div className="mx-3">
                                                <div className="d-flex align-items-center">
                                                    <span className="fs-4 text-muted text-capitalize">
                                                        {com.user.username}
                                                    </span>
                                                </div>
                                                <div className="d-flex justify-content-around mt-2">
                                                    <span className="card-subtitle text-muted">
                                                        <i className="far fa-clock mr-1 text-ndetek"></i>
                                                        <span className="text-ndetek">
                                                            {` ${timeSince(
                                                                date
                                                            )}`}
                                                        </span>
                                                    </span>
                                                    <span
                                                        className="card-subtitle text-muted"
                                                        style={{
                                                            marginLeft: 10,
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                            handleCommentLove(
                                                                com.id
                                                            )
                                                        }
                                                    >
                                                        <i
                                                            className={`${
                                                                com.loved
                                                                    ? "fas"
                                                                    : "far"
                                                            } fa-heart mr-1 text-ndetek`}
                                                        ></i>
                                                        <span className="text-ndetek">
                                                            {` ${com.loves}`}
                                                        </span>
                                                    </span>
                                                </div>
                                                <p>{com.body}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {comment_count < 1 ? null : (
                                <Paginator
                                    length={paginatorLength}
                                    handlePaginate={handlePaginate}
                                    current={current}
                                />
                            )}
                        </div>
                        <div className="col-lg-4">
                            <SingleBlogSidebar
                                blogs={latest_blogs}
                                papers={latest_papers}
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

export default BlogSingle;
