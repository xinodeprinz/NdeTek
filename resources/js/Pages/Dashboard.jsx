import React, { useState, useEffect } from "react";
import PaymentModal from "../components/PaymentModal";
import UploadPaper from "../components/UploadPaper";
import AccountHeader from "../components/AccountHeader";
import TableModal from "../components/TableModal";
import Title from "../components/Title";
import WhatsApp from "../components/WhatsApp";
import { calcTime } from "../Data/functions";
import { useForm } from "@inertiajs/inertia-react";
import { Adsense } from "@ctrl/react-adsense";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AlertModal from "../components/AlertModal";

const Dashboard = ({
    myUser,
    categories,
    pending_uploads,
    uploaded_papers,
    withdrawals,
}) => {
    // Title("Dashboard");
    const [user, setUser] = useState(myUser);
    const [hours, setHours] = useState(calcTime(+1).hours);
    const [minutes, setMinutes] = useState(calcTime(+1).minutes);
    const [seconds, setSeconds] = useState(calcTime(+1).seconds);
    const [dialyUploads, setDialyUploads] = useState(user.dialy_uploads);

    const form = useForm();

    useEffect(() => {
        setInterval(() => {
            const { hours, minutes, seconds } = calcTime(+1);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
    }, [hours, minutes, seconds, calcTime]);

    const deleteUser = () => {
        const { id } = user;
        form.delete(`/admin/delete-user/${id}`, {
            onSuccess: () => {
                new Swal({
                    title: "Success",
                    text: "Thank you for deleting you account! Atleast you've saved NdeTek some income 😂🤣. Feel free to create a new account whenever you wish. You'll be redirected to the home page in 10 seconds.",
                    icon: "success",
                });
                return setInterval(() => {
                    window.location.pathname = "/";
                }, 10000);
            },
            onError: () => alert("An error occured"),
        });
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>NdeTek | Dashboard | Account</title>
                <meta
                    name="description"
                    content="Upload past exam papers, solutions as PDFs and receive 50frs per paper. Withdrawal is automatic via Mobile money."
                />
                <link rel="canonical" href="/dashboard" />
            </Helmet>
            <PaymentModal
                title="Withdrawal"
                buttonText="Withdraw Now"
                balance={user.balance}
            />
            <UploadPaper categories={categories} />
            <AccountHeader username={user.username} imagePath={user.photo} />
            <AlertModal
                title="Delete Account"
                text={`Are you sure you want to delete your account? All your money will be lost if you proceed with this action, and you'll not still have access to this account. Refresh the web page after your account has been deleted.`}
                buttonText="Yes"
                func={deleteUser}
            />
            <TableModal
                id="pending"
                title="Pending Uploads"
                data={pending_uploads}
            />
            <TableModal
                id="uploaded"
                title="Uploaded Papers"
                data={uploaded_papers}
            />
            <TableModal
                isPaper={false}
                id="withdrawals"
                title="Withdrawal History"
                data={withdrawals}
            />

            {/* <Adsense
                client="ca-pub-2557977792147621"
                slot="8584943081"
                style={{ width: 500, height: 300 }}
                format=""
            /> */}

            <div className="my-5" id="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <div className="card shadow-lg">
                                <div className="card-body text-center">
                                    <div className="fs-4 fw-bold">
                                        Balance:{" "}
                                        <span className="text-ndetek">
                                            {user.balance} FCFA
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <div className="fs-4 fw-bold text-center">
                                        <div className="mb-2">
                                            1 Paper ={" "}
                                            <span className="text-ndetek">
                                                25 FCFA
                                            </span>
                                            <div style={{ fontSize: 20 }}>
                                                <small>
                                                    Max daily uploads:{" "}
                                                    <span className="text-ndetek">
                                                        6
                                                    </span>
                                                </small>
                                            </div>
                                            <div
                                                style={{ fontSize: 20 }}
                                                className="mb-2"
                                            >
                                                <small>
                                                    Papers uploaded today:{" "}
                                                    <span className="text-ndetek">
                                                        {dialyUploads}
                                                    </span>
                                                </small>
                                            </div>
                                            {parseInt(dialyUploads) >= 6 ? (
                                                <div
                                                    style={{ fontSize: 17 }}
                                                    className="mt-2"
                                                >
                                                    Time for next upload:{" "}
                                                    <span className="text-ndetek">
                                                        {hours > 9
                                                            ? hours
                                                            : String(
                                                                  hours
                                                              ).padStart(2, 0)}
                                                        :
                                                        {minutes > 9
                                                            ? minutes
                                                            : String(
                                                                  minutes
                                                              ).padStart(2, 0)}
                                                        :
                                                        {seconds > 9
                                                            ? seconds
                                                            : String(
                                                                  seconds
                                                              ).padStart(2, 0)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <button
                                                    className="btn btn-ndetek text-capitalize"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#paper-modal"
                                                >
                                                    upload a paper now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card shadow-lg">
                                <div className="card-body">
                                    <div className="fs-4 fw-bold text-center">
                                        <div className="mb-2 text-capitalize fs-5">
                                            minimum withdrawal:
                                            <span className="text-ndetek">
                                                150 FCFA
                                            </span>
                                        </div>
                                        <div className="mb-2 text-capitalize fs-6">
                                            charges:
                                            <span className="text-ndetek">
                                                {` 10%`}
                                            </span>
                                        </div>
                                        <button
                                            className="btn btn-ndetek text-capitalize"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal"
                                        >
                                            withdraw now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card shadow-lg">
                                <div className="card-body text-center">
                                    <div className="fs-4 fw-bold text-capitalize">
                                        <a
                                            data-bs-toggle="modal"
                                            data-bs-target="#withdrawals"
                                            href="#"
                                            className="card-link text-ndetek"
                                        >
                                            withdrawal history
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card shadow-lg">
                                <div className="card-body text-center">
                                    <div className="fs-4 fw-bold text-capitalize">
                                        papers uploaded:{" "}
                                        <span className="text-ndetek">
                                            {uploaded_papers.length}
                                        </span>
                                        <div className="text-center">
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#uploaded"
                                                className="card-link fs-5 text-ndetek"
                                            >
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="card shadow-lg">
                                <div className="card-body text-center">
                                    <div className="fs-4 fw-bold text-capitalize">
                                        pending uploads:{" "}
                                        <span className="text-ndetek">
                                            {pending_uploads.length}
                                        </span>
                                        <div className="text-center">
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#pending"
                                                className="card-link fs-5 text-ndetek"
                                            >
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Adsense
                client="ca-pub-2557977792147621"
                slot="8584943081"
                style={{ width: 500, height: 300 }}
                format=""
            /> */}
            <WhatsApp />
        </HelmetProvider>
    );
};

export default Dashboard;
