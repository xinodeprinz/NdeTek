require("./bootstrap");
require("bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_fre from "./translations/fre/french.json";
import common_en from "./translations/eng/english.json";

i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "en", // language to use
    resources: {
        fre: {
            common: common_fre, // 'common' is our custom namespace
        },
        en: {
            common: common_en,
        },
    },
});

import ReactGA from "react-ga";
const TRACKING_ID = "G-HEEG1C11WW"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

ReactGA.pageview(window.location.pathname + window.location.search);

createInertiaApp({
    resolve: async (name) =>
        await import(`./Pages/${name}`).then((module) => module.default),
    setup({ el, App, props }) {
        render(
            <I18nextProvider i18n={i18next}>
                <App {...props} />
            </I18nextProvider>,
            el
        );
    },
});

InertiaProgress.init({});

// showSpinner: true,
//     color: "purple",
//     delay: 0,
//     includeCSS: false,

/* This is for google analytics */
/*                               */
/* Measurement ID: G-HEEG1C11WW */
/* Stream ID: 3804380843   */
/*                         */

//stream:  G-HEEG1C11WW
//meaurement:  3804380843
