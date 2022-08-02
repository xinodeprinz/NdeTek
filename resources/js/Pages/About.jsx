import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import BreadCrumb from "../components/BreadCrumb";
import WhatsApp from "../components/WhatsApp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "@inertiajs/inertia-react";

const About = () => {
    // Title("Portfolio");
    return (
        <HelmetProvider>
            <Helmet>
                <title>NdeTek | About</title>
                <meta
                    name="description"
                    content="NdeTek is an upcoming technological company currently based in Buea, Cameroon that aims at training youths in Software Engineering."
                />
                <link rel="canonical" href="/about" />
            </Helmet>
            <Navbar />
            <BreadCrumb
                mainText="Home"
                currentText="About"
                text="About"
                url="/"
            />
            <div className="my-5">
                <div className="container">
                    <div className="mb-4">
                        <h4 className="text-uppercase text-ndetek mb-2 fw-bold">
                            about us
                        </h4>
                        <p>
                            We are a software development team based in Molyko
                            Buea. We offer: mobile apps, desktop apps, web
                            applications, websites, graphics design and much
                            more for you guys at very affordable prices. We aim
                            at helping young youths in ICT by training and
                            inspiring them on the importance of technology in
                            our upcoming society.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-uppercase text-ndetek mb-2 fw-bold">
                            What we offer
                        </h4>
                        <p>
                            This website contains{" "}
                            <Link href="/papers/gce/gce-advanced-level">
                                Past Exam Papers in Cameroon
                            </Link>{" "}
                            of all types; feel free to download them. You can
                            also upload past GCE and concour papers and even
                            solutions, and get paid.{" "}
                            <span className="text-ndetek">
                                1 Paper = 25 FCFA
                            </span>
                            . To begin,{" "}
                            <Link href="/register">create an account now</Link>.
                        </p>
                        <p>
                            We also build{" "}
                            <span className="text-ndetek">websites</span> of all
                            types at affordable prices, and also train people on{" "}
                            <span className="text-ndetek">Web Development</span>{" "}
                            at{" "}
                            <span className="text-ndetek">
                                a price of your convinience
                            </span>
                            . If interested in any of the following services,
                            then contact me via{" "}
                            <span className="text-ndetek">+237 675874066</span>{" "}
                            or click on the WhatsApp icon and select{" "}
                            <mark>chat on whatsapp</mark> to talk with me.
                        </p>
                        <p>
                            You can join the NdeTek WhatsApp group by clicking
                            on the WhatsApp icon and selecting{" "}
                            <mark>join whatsapp group.</mark>
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-uppercase text-ndetek mb-2 fw-bold">
                            Our Aim
                        </h4>
                        <p className="mb-2">
                            We aim at helping young youths in ICT by training
                            and inspiring them on the importance of technology
                            in our upcoming society there by giving them
                            practical skills on technologies like:
                        </p>
                        <ul>
                            <li>Web development</li>
                            <li>Mobile application development</li>
                            <li>Training bootcamps</li>
                            <li>Give aways</li>
                            <li>Cloud computing</li>
                        </ul>
                        We also orientate youths thereby giving them relevant
                        advice. Feel free to contact us in case you need our
                        services.
                    </div>
                </div>
            </div>
            <WhatsApp />
            <Footer />
        </HelmetProvider>
    );
};

export default About;
