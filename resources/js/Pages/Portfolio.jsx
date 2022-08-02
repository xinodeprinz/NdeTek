import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import BreadCrumb from "../components/BreadCrumb";
import WhatsApp from "../components/WhatsApp";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Portfolio = () => {
    // Title("Portfolio");
    return (
        <HelmetProvider>
            <Helmet>
                <title>NdeTek | Portfolio</title>
                <meta
                    name="description"
                    content="Projects built by NdeTek based on web development, mobile development, Artificial Intelligence and Desktop application development."
                />
                <link rel="canonical" href="/portfolio" />
            </Helmet>
            <Navbar />
            <BreadCrumb
                mainText="Home"
                currentText="Portfolio"
                text="Portfolio"
                url="/"
            />
            <div className="my-5 text-center">
                <div className="alert alert-primary">
                    No portfolio available; please check again later.
                </div>
            </div>
            <WhatsApp />
            <Footer />
        </HelmetProvider>
    );
};

export default Portfolio;
