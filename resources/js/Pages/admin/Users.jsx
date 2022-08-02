import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import AdminHead from "../../components/AdminHead";
import AdminSidebar from "../../components/AdminSidebar";
import AlertModal from "../../components/AlertModal";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import { Adsense } from "@ctrl/react-adsense";

const Users = ({ users }) => {
    Title("Admin");
    const [myUser, setMyUser] = useState({ username: "", id: null });

    const triggerDelete = (id) => {
        setMyUser(users.filter((u) => u.id === id)[0]);
        document.getElementById("showAlert").click();
    };

    const [loaderInfo, setLoaderInfo] = useState({
        show: false,
        text: "",
    });

    const form = useForm();

    const deleteUser = () => {
        document.getElementById("close").click();
        setLoaderInfo({
            show: true,
            text: `Deleting ${myUser.username} ..."`,
        });
        const { id } = myUser;
        form.delete(`/admin/delete-user/${id}`, {
            onSuccess: () => {
                setLoaderInfo({ show: false, text: "" });
                new Swal({
                    title: "Success",
                    text: "User deleted successfully",
                    icon: "success",
                });
            },
            onError: () => alert("An error occured"),
        });
    };
    return (
        <div className="d-lg-flex">
            <button
                hidden
                id="showAlert"
                data-bs-toggle="modal"
                data-bs-target="#alertModal"
            ></button>
            <AdminSidebar />
            {/* <Adsense
                client="ca-pub-2557977792147621"
                slot="8584943081"
                style={{ width: 500, height: 300 }}
                format=""
            /> */}
            <AlertModal
                title="Delete User"
                text={`Are you sure you want to delete the user with username "${myUser.username}"?`}
                buttonText="Yes"
                func={deleteUser}
            />
            <main id="admin-main">
                <AdminHead />
                <div className="container mt-5 px-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span>
                            Number of users:{" "}
                            <span className="text-ndetek fw-bold">
                                {users.length}
                            </span>
                        </span>
                        <span>
                            Business users:{" "}
                            <span className="text-ndetek fw-bold">
                                {users.filter((e) => e.email).length}
                            </span>
                        </span>
                        <Loader show={loaderInfo.show} text={loaderInfo.text} />
                    </div>
                    <div className="table responsive">
                        <table className="table table-striped table-bordered admin-table">
                            <thead className="text-ndetek text-capitalize">
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Verified Email</th>
                                    <th>Balance (FCFA)</th>
                                    <th>Dialy uploads</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{++key}</td>
                                            <td className="text-capitalize">
                                                {user.username}
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.phone_number}</td>
                                            <td>
                                                {user.email_verified_at
                                                    ? new Date(
                                                          user.email_verified_at
                                                      ).toDateString()
                                                    : "NULL"}
                                            </td>
                                            <td>{user.balance}</td>
                                            <td>{user.dialy_uploads}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        triggerDelete(user.id)
                                                    }
                                                >
                                                    <i className="fas fa-trash"></i>
                                                    <span> Delete User</span>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Users;
