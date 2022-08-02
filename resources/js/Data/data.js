import { uploadPlugin } from "./functions";

const colors = {
    ndetek: "#0354ac",
    blue: "#0d6efd",
    indigo: "#6610f2",
    purple: "#6f42c1",
    pink: "#d63384",
    red: "#dc3545",
    orange: "#fd7e14",
    yellow: "#ffc107",
    green: "#198754",
    teal: "#20c997",
    cyan: "#0dcaf0",
    white: "#fff",
    gray: "#6c757d",
    "gray-dark": "#343a40",
    "gray-100": "#f8f9fa",
    "gray-200": "#e9ecef",
    "gray-300": "#dee2e6",
    "gray-400": "#ced4da",
    "gray-500": "#adb5bd",
    "gray-600": "#6c757d",
    "gray-700": "#495057",
    "gray-800": "#343a40",
    "gray-900": "#212529",
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    info: "#0dcaf0",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#212529",
};

export const team_members = [
    {
        image: "nde.jpg",
        name: "nfor nde nyambi",
        post: "CEO",
        social_medias: [
            { name: "twitter", link: "#" },
            { name: "facebook-f", link: "#" },
            { name: "instagram", link: "#" },
            { name: "linkedin", link: "#" },
        ],
    },
    {
        image: "duke.jpg",
        name: "kum leslie mua",
        post: "Director",
        social_medias: [
            { name: "twitter", link: "#" },
            { name: "facebook-f", link: "#" },
            { name: "instagram", link: "#" },
            { name: "linkedin", link: "#" },
        ],
    },
    {
        image: "gedeon.jpg",
        name: "soh mangwa gedeon",
        post: "Director",
        social_medias: [
            { name: "twitter", link: "#" },
            { name: "facebook-f", link: "#" },
            { name: "instagram", link: "#" },
            { name: "linkedin", link: "#" },
        ],
    },
    {
        image: "ronard.jpg",
        name: "fon ronard sauh",
        post: "Director",
        social_medias: [
            { name: "twitter", link: "#" },
            { name: "facebook-f", link: "#" },
            { name: "instagram", link: "#" },
            { name: "linkedin", link: "#" },
        ],
    },
];

export const ckEditorConfig = {
    extraPlugins: [uploadPlugin],
    fontColor: {
        colors: arrangeColors(colors),
    },
    fontBackgroundColor: {
        colors: arrangeColors(colors),
    },
};

function arrangeColors(colors) {
    const labels = Object.keys(colors);
    const values = Object.values(colors);

    let result = [];
    for (let i = 0; i < labels.length; i++) {
        result.push({ color: values[i], label: labels[i] });
    }

    return result;
}
