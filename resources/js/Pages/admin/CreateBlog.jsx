import { useForm } from "@inertiajs/inertia-react";
import classNames from "classnames";
import React, { useState } from "react";
import Swal from "sweetalert2";
import AdminHead from "../../components/AdminHead";
import AdminSidebar from "../../components/AdminSidebar";
import Title from "../../components/Title";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor-ndetek";
import axios from "axios";
import { Adsense } from "@ctrl/react-adsense";
import { uploadPlugin } from "../../Data/functions";
import { ckEditorConfig } from "../../Data/data";

const CreateBlog = ({ categories }) => {
    Title("Admin");
    const [disabled, setDisabled] = useState(false);

    const form = useForm({
        title: "",
        image: null,
        blog_category_id: null,
        sub_text: "",
        body: "",
    });

    const handleInput = (e) => {
        form.setData(e.target.name, e.target.value);
    };

    const handleFile = (e) => {
        form.setData(e.target.name, e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);
        form.post("/admin/blog-create", {
            onFinish: () => setDisabled(false),
            onSuccess: () => {
                new Swal({
                    title: "Success",
                    text: "Blog post created successfully.",
                    icon: "success",
                });

                return setInterval(() => {
                    window.location.reload();
                }, 3000);
            },
        });
    };

    return (
        <div className="d-lg-flex">
            <AdminSidebar />
            {/* <Adsense
                client="ca-pub-2557977792147621"
                slot="8584943081"
                style={{ width: 500, height: 300 }}
                format=""
            /> */}

            <main id="admin-main">
                <AdminHead />
                <div className="container mt-5 px-5">
                    <div className="card shadow-lg border-primary">
                        <div className="card-header bg-white text-ndetek fw-bold fs-4">
                            Create a blog post
                        </div>
                        <div className="card-body">
                            <form noValidate onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="title"
                                                className="form-label"
                                            >
                                                Title
                                            </label>
                                            <input
                                                type="title"
                                                className={classNames(
                                                    "form-control form-control-sm",
                                                    {
                                                        "is-invalid":
                                                            form.errors.title,
                                                        "is-valid":
                                                            form.hasErrors &&
                                                            !form.errors.title,
                                                    }
                                                )}
                                                id="title"
                                                name="title"
                                                placeholder="Blog title"
                                                onChange={handleInput}
                                                disabled={disabled}
                                            />
                                            <div className="invalid-feedback">
                                                {form.errors.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="image"
                                                className="form-label"
                                            >
                                                Main Image
                                            </label>
                                            <input
                                                name="image"
                                                type="file"
                                                onChange={handleFile}
                                                disabled={disabled}
                                                id="image"
                                                accept=".jpg,.png.jpeg"
                                                className={classNames(
                                                    "form-control form-control-sm",
                                                    {
                                                        "is-invalid":
                                                            form.errors.image,
                                                        "is-valid":
                                                            form.hasErrors &&
                                                            !form.errors.image,
                                                    }
                                                )}
                                            />
                                            <div className="invalid-feedback">
                                                {form.errors.image}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="blog_category_id"
                                                className="form-label"
                                            >
                                                Select category
                                            </label>
                                            <select
                                                className={classNames(
                                                    "form-control form-control-sm",
                                                    {
                                                        "is-invalid":
                                                            form.errors
                                                                .blog_category_id,
                                                        "is-valid":
                                                            form.hasErrors &&
                                                            !form.errors
                                                                .blog_category_id,
                                                    }
                                                )}
                                                name="blog_category_id"
                                                onChange={handleInput}
                                                disabled={disabled}
                                            >
                                                <option value="">
                                                    Choose...
                                                </option>
                                                {categories.map((item, key) => (
                                                    <option
                                                        value={item.id}
                                                        key={key}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="invalid-feedback">
                                                {form.errors.blog_category_id}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="sub_text"
                                        className="form-label"
                                    >
                                        Sub text
                                    </label>
                                    <CKEditor
                                        config={ckEditorConfig}
                                        editor={ClassicEditor}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            form.setData("sub_text", data);
                                        }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="body"
                                        className="form-label"
                                    >
                                        Build your blog post here
                                    </label>
                                    <CKEditor
                                        config={ckEditorConfig}
                                        editor={ClassicEditor}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            form.setData("body", data);
                                        }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-ndetek w-100 text-capitalize"
                                        disabled={disabled}
                                    >
                                        {disabled ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                <span> Please Wait...</span>
                                            </>
                                        ) : (
                                            <span>Create Blog</span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateBlog;
