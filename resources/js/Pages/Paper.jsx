import React, { useState } from "react";
import PaperCard from "../components/PaperCard";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Paginator from "../components/Paginator";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";
import { Adsense } from "@ctrl/react-adsense";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Paper = (props) => {
    // Title("Papers");
    const [categories, setCategories] = useState(props.categories);
    const [papers, setPapers] = useState(props.papers);
    const [category, setCategory] = useState(props.category);
    const [isFetching, setIsFetching] = useState(false);
    const [paginatorLength, setPaginatorLength] = useState(
        props.paginator_length
    );
    const [current, setCurrent] = useState(1);

    const handlePaginate = (pag_id) => {
        const cat_id = category.id;
        axios.get(`/paginate/${cat_id}/${pag_id}`).then((res) => {
            const { papers, current } = res.data;
            setPapers(papers);
            setCurrent(Number(current));
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    NdeTek | Past exam papers | GCE Advanced level | GCE
                    ordinary level | Past concour papers | University of Buea |
                    University papers in Cameroon
                </title>
                <meta
                    name="description"
                    content="Download past GCE advanced level, GCE ordinary level, past Cameroon conour papers, Cameroon past university papers for free."
                />
                <link rel="canonical" href="/papers/gce/gce-advanced-level" />
            </Helmet>
            <Navbar />
            <BreadCrumb
                mainText="Home"
                currentText="Paper"
                text="Papers"
                url="/"
            />
            <div id="papers" className="mt-5 mb-3">
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
                                            placeholder="Search for papers"
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
                            <div className="row">
                                {papers.length === 0 ? (
                                    <div className="container">
                                        <div className="alert alert-info text-center">
                                            No paper available for this domain;
                                            check again later.
                                        </div>
                                    </div>
                                ) : (
                                    papers.map((paper, key) => {
                                        return (
                                            <div
                                                className="col-6 col-md-4 mb-5"
                                                key={key}
                                            >
                                                <PaperCard paper={paper} />
                                            </div>
                                        );
                                    })
                                )}
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

                            {papers.length === 0 ? null : (
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
                                placeholder="Search for papers"
                                blogs={props.blogs}
                                main_cat={props.main_cat}
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

export default Paper;
