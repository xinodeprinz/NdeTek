import React, { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import FormHead from "../components/FormHead";
import SubmitButton from "../components/SubmitButton";
import data from "../Data/register";
import classNames from "classnames";
import Swal from "sweetalert2";
import { usePage } from "@inertiajs/inertia-react";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { showPassword } from "../Data/functions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
    // Title("Register");
    const [button, setButton] = useState({
        text: "Register",
        disabled: false,
    });

    const form = useForm({
        username: "",
        email: "",
        phone_number: "",
        photo: "",
        password: "",
    });

    const handleInput = (e) => {
        form.setData(e.target.name, e.target.value);
        form.post("/validate");
    };

    const getImage = (files) => {
        let image = files[0];
        const imageField = document.getElementById("image");

        // Checking file extension
        const extensions = ["jpg", "png", "jfif", "jpeg"];
        const extension = image.name.split(".").pop();
        if (!extensions.includes(extension)) {
            form.setData("photo", "");
            return alert("Please upload an image.");
        }
        if (image) {
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                imageField.src = result;
            };
            reader.readAsDataURL(image);
        }
        form.setData("photo", image);
    };

    const submit = (e) => {
        e.preventDefault();
        setButton({
            text: "Please wait",
            disabled: true,
        });
        form.post("/register", {
            onFinish: () => {
                setButton({
                    text: "Register",
                    disabled: false,
                });
            },
        });
    };
    return (
        <HelmetProvider>
            <Helmet>
                <title>NdeTek | Register</title>
                <meta
                    name="description"
                    content="Register an account and be able to upload past papers and also place a withdrawal."
                />
                <link rel="canonical" href="/register" />
            </Helmet>
            <Navbar />
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card shadow-lg border-primary">
                            <FormHead alt="Register" />
                            <div className="card-body">
                                <form onSubmit={submit} noValidate>
                                    <div className="row">
                                        <div className="col-md-6 mb-2">
                                            <img
                                                src="/storage/images/profiles/empty.jpg"
                                                alt="Empty Image"
                                                style={{
                                                    width: "100%",
                                                    height: 130,
                                                }}
                                                id="image"
                                                className="img-fluid mt-3 mb-0 pb-0"
                                            />
                                            <input
                                                type="file"
                                                id="imageInput"
                                                hidden
                                                onChange={(e) => {
                                                    getImage(e.target.files);
                                                }}
                                                accept=".png,.jpg,.jpeg"
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-ndetek w-100 mt-0"
                                                style={{ borderRadius: 0 }}
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            "imageInput"
                                                        )
                                                        .click()
                                                }
                                            >
                                                <i className="fas fa-cloud-upload-alt mr-1"></i>
                                                <span> Upload Image</span>
                                            </button>
                                        </div>
                                        <div className="col-md-6">
                                            {data[0].map((item, key) => {
                                                return (
                                                    <div
                                                        className="mb-2"
                                                        key={key}
                                                    >
                                                        <label
                                                            htmlFor={item.name}
                                                            className="form-label"
                                                        >
                                                            {item.label}
                                                        </label>
                                                        <input
                                                            type={item.type}
                                                            className={classNames(
                                                                "form-control",
                                                                {
                                                                    "is-invalid":
                                                                        form
                                                                            .errors[
                                                                            item
                                                                                .name
                                                                        ],
                                                                    "is-valid":
                                                                        form.hasErrors &&
                                                                        !form
                                                                            .errors[
                                                                            item
                                                                                .name
                                                                        ],
                                                                }
                                                            )}
                                                            id={item.name}
                                                            name={item.name}
                                                            placeholder={
                                                                item.placeholder
                                                            }
                                                            onChange={
                                                                handleInput
                                                            }
                                                            value={
                                                                form.data[
                                                                    item.name
                                                                ]
                                                            }
                                                            disabled={
                                                                button.disabled
                                                            }
                                                            autoComplete="off"
                                                        />
                                                        <div className="invalid-feedback">
                                                            {
                                                                form.errors[
                                                                    item.name
                                                                ]
                                                            }
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="row">
                                        {data[1].map((item, key) => {
                                            return (
                                                <div
                                                    className="mb-2 col-md-6"
                                                    key={key}
                                                >
                                                    <label
                                                        htmlFor={item.name}
                                                        className="form-label"
                                                    >
                                                        {item.label}
                                                    </label>
                                                    <input
                                                        type={item.type}
                                                        className={classNames(
                                                            "form-control",
                                                            {
                                                                "is-invalid":
                                                                    form.errors[
                                                                        item
                                                                            .name
                                                                    ],
                                                                "is-valid":
                                                                    form.hasErrors &&
                                                                    !form
                                                                        .errors[
                                                                        item
                                                                            .name
                                                                    ],
                                                            }
                                                        )}
                                                        id={item.name}
                                                        name={item.name}
                                                        placeholder={
                                                            item.placeholder
                                                        }
                                                        onChange={handleInput}
                                                        value={
                                                            form.data[item.name]
                                                        }
                                                        disabled={
                                                            button.disabled
                                                        }
                                                        autoComplete="off"
                                                    />
                                                    {item.name ===
                                                    "password" ? (
                                                        <a
                                                            href="#"
                                                            className="text-ndetek"
                                                            onClick={
                                                                showPassword
                                                            }
                                                        >
                                                            <i
                                                                className="fas fa-eye-slash"
                                                                id="showIcon"
                                                                style={{
                                                                    position:
                                                                        "absolute",
                                                                    fontSize:
                                                                        "20px",
                                                                    marginTop:
                                                                        "-30px",
                                                                    marginRight: 25,
                                                                    right: 0,
                                                                    cursor: "pointer",
                                                                }}
                                                            ></i>
                                                        </a>
                                                    ) : null}
                                                    <div className="invalid-feedback">
                                                        {form.errors[item.name]}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <SubmitButton
                                        disabled={button.disabled}
                                        text={button.text}
                                        text2="Already have an account?"
                                        linkText="Login"
                                        route="/login"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <WhatsApp />
            </div>
            <Footer />
        </HelmetProvider>
    );
};

export default Register;
