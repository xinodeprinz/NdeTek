import { Link } from "@inertiajs/inertia-react";
import React from "react";
import BlogCard from "../components/BlogCard";
import PaperCard from "../components/PaperCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AuthModal from "../components/AuthModal";
import { handleLike } from "../Data/functions";
import { team_members } from "../Data/data";
import AdSense from "react-adsense";

const Home = ({ papers, blogs }) => {
    // Title("Home");
    return (
        <HelmetProvider>
            <Helmet>
                <title>NdeTek | The Heart of Technology</title>
                <meta
                    name="description"
                    content="NdeTek is an upcoming technological company currently based in Buea, Cameroon that aims at training youths in Software Engineering."
                />
                <link rel="canonical" href="/" />
            </Helmet>
            <Navbar />
            <button
                id="show-auth-modal"
                data-bs-toggle="modal"
                data-bs-target="#auth-modal"
                hidden
            ></button>
            <AuthModal />
            {/* Money man */}
            <div id="money-man">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8 money-text">
                            <div className="text-uppercase mb-4">
                                <h1 className="font-weight-bold">
                                    Welcome To NdeTek
                                </h1>
                                <h4 className="font-weight-bold">
                                    The Heart of Technology
                                </h4>
                            </div>

                            <h5 className="font-weight-bold text-uppercase">
                                Free money on NdeTek
                            </h5>
                            <p>
                                Upload past GCE and Concour papers and be paid
                                25frs per paper. Get entertained by our amazing
                                blog posts. Download your past exam papers for
                                free.
                            </p>
                            <Link
                                href="/register"
                                className="btn text-uppercase btn-ndetek"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/login"
                                className="ms-3 btn text-uppercase btn-outline-light"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <img
                                src="/storage/images/money-man.png"
                                alt="Make money on NdeTek"
                                className="img-fluid money-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Main section */}

            {/* <AdSense.Google
                client="ca-pub-2557977792147621"
                slot="4900704122"
                style={{ width: 200, height: 200 }}
                format=""
            /> */}

            {/* Recent Blogs */}
            {blogs.length === 0 ? null : (
                <div id="latest-blogs" className="mt-5 mb-3">
                    <div className="container">
                        <h4 className="text-ndetek text-uppercase text-center mb-4">
                            Latest Blog Posts
                        </h4>
                        <div className="row">
                            {blogs.map((blog, key) => (
                                <div className="col-lg-6" key={key}>
                                    <BlogCard
                                        blog={blog}
                                        handleLike={handleLike}
                                    />
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/blogs/technology"
                            className="btn btn-ndetek float-end mb-5"
                        >
                            More Posts
                        </Link>
                    </div>
                </div>
            )}
            {/* <Adsense
                client="ca-pub-2557977792147621"
                slot="8584943081"
                style={{ width: 500, height: 300 }}
                format=""
            /> */}

            {/* Recent Papers */}
            {papers.length === 0 ? null : (
                <div id="latest-past-papers" className="py-5 mt-7">
                    <div className="container pb-4">
                        <h4 className="text-white text-uppercase text-center mb-4">
                            Latest past exam papers
                        </h4>
                        <div className="row">
                            {papers.map((paper, key) => {
                                return (
                                    <div
                                        className="col-6 col-md-4 col-lg-3 mb-5 mb-lg-0"
                                        key={key}
                                    >
                                        <PaperCard paper={paper} />
                                    </div>
                                );
                            })}
                        </div>
                        <Link
                            href="/papers/gce/gce-advanced-level"
                            className="btn btn-light float-end mt-3 btn-my-yoo"
                            style={{ fontWeight: 500 }}
                        >
                            More Papers
                        </Link>
                    </div>
                </div>
            )}

            {/* Team Start */}
            <div
                className="container-fluid py-5 wow fadeInUp"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <h4 className="text-center text-ndetek text-uppercase mb-4">
                        Our team members
                    </h4>
                    <div className="row g-5">
                        {team_members.map((member, key) => (
                            <div
                                key={key}
                                className="col-sm-6 col-md-3 wow slideInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="team-item shadow bg-white rounded overflow-hidden">
                                    <div className="team-img position-relative overflow-hidden">
                                        <img
                                            className="img-fluid w-100 employee-img"
                                            src={`/storage/images/${member.image}`}
                                            alt={member.name}
                                        />
                                        <div className="team-social">
                                            {member.social_medias.map(
                                                (media, key) => (
                                                    <a
                                                        key={key}
                                                        className="btn btn-lg btn-primary btn-lg-square rounded"
                                                        href={media.link}
                                                    >
                                                        <i
                                                            className={`fab fa-${media.name} fw-normal`}
                                                        ></i>
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <h4 className="text-primary text-capitalize fs-ndetek">
                                            {member.name}
                                        </h4>
                                        <p className="text-capitalize m-0">
                                            {member.post}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Team End */}

            <div id="about" className="py-5">
                <div className="container text-white">
                    <h4 className="text-uppercase mb-4 fw-bold">
                        about NdeTek
                    </h4>
                    <p style={{ fontWeight: 500 }}>
                        We are a software development team based in Molyko Buea.
                        We offer: mobile apps, desktop apps, web applications,
                        websites, graphics design and much more for you guys at
                        very affordable prices. We aim at helping young youths
                        in ICT by training and inspiring them on the importance
                        of technology in our upcoming society.
                    </p>
                    <Link href="/about" className="btn btn-ndetek">
                        <i className="fas fa-eye"></i>
                        <span> View More</span>
                    </Link>
                </div>
            </div>

            <div id="our-partners" className="my-5">
                <div className="container">
                    <h4 className="text-uppercase text-ndetek text-center mb-4 mb-4 fw-bold">
                        Our partners
                    </h4>
                    <div
                        id="our-sponsors-carousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div
                                data-bs-interval="7000"
                                className="carousel-item active"
                            >
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <div className="team-item rounded overflow-hidden h-100">
                                            <div className="team-img position-relative overflow-hidden">
                                                <img
                                                    className="img-fluid w-100 employee-img"
                                                    style={{ height: 150 }}
                                                    src="/storage/images/ub-requirements.jpg"
                                                    alt="UB Requirements"
                                                />
                                                <div className="team-social">
                                                    <a
                                                        className="btn btn-lg btn-primary btn-lg-square rounded"
                                                        href="https://ubrequirements.com"
                                                        target="_blank"
                                                    >
                                                        <i className="fas fa-globe fw-normal"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <WhatsApp />
            <Footer />
        </HelmetProvider>
    );
};

export default Home;
