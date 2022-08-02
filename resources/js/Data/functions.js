import axios from "axios";

export function calcTime(offset) {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * offset);
    // return nd.toLocaleString();
    // return nd.toLocaleTimeString();
    return {
        hours: 24 - nd.getHours(),
        minutes: 60 - nd.getMinutes(),
        seconds: 60 - nd.getSeconds(),
    };
}

export function showPassword() {
    const showIcon = document.getElementById("showIcon");
    const pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
        showIcon.classList.remove("fa-eye-slash");
        showIcon.classList.add("fa-eye");
    } else {
        pass.type = "password";
        showIcon.classList.remove("fa-eye");
        showIcon.classList.add("fa-eye-slash");
    }
}

export const handleLike = (id, form) => {
    form.get(`/like/${id}`, {
        onError: (e) => {
            if (e.hasOwnProperty("login")) {
                document.getElementById("show-auth-modal").click();
            }
        },
    });
};

const uploadAdapter = (loader) => {
    return {
        upload: () => {
            return new Promise((resolve, reject) => {
                const body = new FormData();
                loader.file.then((file) => {
                    body.append("image", file);
                    axios.post("/admin/insert-image", body).then((res) =>
                        resolve({
                            default: `/storage/${res.data}`,
                        })
                    );
                });
            });
        },
    };
};

export const uploadPlugin = (editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
    };
};
