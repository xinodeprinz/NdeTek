import React from "react";

const Footer = () => {
    const date = new Date();
    return (
        <footer id="footer">
            <div className="bg-primary text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <h4 className="text-capitalize">Contact Us</h4>
                            <i className="fas fa-road"></i> Molyko Buea <br />
                            <i className="fas fa-envelope"></i>{" "}
                            ndetekcameroon@gmail.com <br />
                            <i className="fab fa-whatsapp"></i> +237 675874066{" "}
                            <br />
                            <i className="fab fa-facebook"></i> NdeTek
                        </div>
                        <div className="col-lg-4 mb-3">
                            <h4 className="text-capitalize">About Us</h4>
                            We are a software development team based in Molyko
                            Buea. We offer: mobile apps, desktop apps, web
                            applications, websites, graphics design and much
                            more for you guys at very affordable prices.
                        </div>
                        <div className="col-lg-4 mb-3">
                            <h4 className="text-capitalize">Subscribe</h4>
                            We aim at helping young youths in ICT by training
                            and inspiring them on the importance of technology
                            in our upcoming society. Subscribe to get more info.{" "}
                            <br />
                            <span className="h3">
                                {icons.map((icon, key) => (
                                    <a
                                        href={icon.link}
                                        target="_blank"
                                        className="text-white"
                                        key={key}
                                    >
                                        <i
                                            className={`mx-2 fab fa-${icon.text}`}
                                        ></i>
                                    </a>
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center bg-ndetek text-white my-0 py-3">
                NdeTek Cameroon &copy; copyright {date.getFullYear()}
            </p>
        </footer>
    );
};

const icons = [
    {
        link: "https://api.whatsapp.com/send?phone=237675874066&text=Greetings%20NdeTek!%20My%20name%20is%20",
        text: "whatsapp",
    },
    { link: "#", text: "facebook" },
    { link: "#", text: "instagram" },
    { link: "#", text: "telegram" },
    { link: "#", text: "twitter" },
];

export default Footer;
