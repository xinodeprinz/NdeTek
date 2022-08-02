import React from "react";

const WhatsApp = () => {
    const links = {
        chat: "https://api.whatsapp.com/send?phone=237675874066&text=Greetings%20NdeTek!%20My%20name%20is%20",
        group: "https://chat.whatsapp.com/DUQw3HcTgGAJjZvKf1tdPp",
    };
    const styles = {
        para: {
            color: "green",
            position: "fixed",
            bottom: "100px",
            right: "50px",
        },
        ancore: {
            textDecoration: "none",
            borderRadius: "50%",
        },
    };
    return (
        <div style={{ position: "relative" }}>
            <div className="float-end dropdown" style={styles.para}>
                <a
                    href="#"
                    style={styles.ancore}
                    className="btn btn-success dropdown-toggle"
                    id="whatsapp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="fab fa-whatsapp fa-2x"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdown">
                    <li>
                        <a
                            className="dropdown-item"
                            href={links.chat}
                            target="_blank"
                        >
                            Chat on whatsApp
                        </a>
                    </li>
                    <li>
                        <a
                            className="dropdown-item"
                            href={links.group}
                            target="_blank"
                        >
                            Join our whatsApp group
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default WhatsApp;

{
    /* <div style="position:relative">
    <p className="pull-right" style="color:green;position:fixed;bottom:100px;right:50px">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=237675874066&text=Greetings%20NdeTek!%20My%20name%20is%20"
         style="text-decoration:none;border-radius:50%" className="btn btn-success">
         <i style="font-size: 30px;" className="fa fa-whatsapp"></i></a>
    </p>
</div> */
}
