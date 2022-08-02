// // // // import React from "react";
// // // // import Box from "@material-ui/core/Box";
// // // // import CircularProgress from "@material-ui/core/CircularProgress";

// // // // export default function Test() {
// // // //     const [uploadOrDownloadCount, setUploadOrDownloadCount] =
// // // //         React.useState(10);

// // // //     React.useEffect(() => {
// // // //         const timer = setInterval(() => {
// // // //             setUploadOrDownloadCount((beforeValue) =>
// // // //                 beforeValue >= 100 ? 0 : beforeValue + 10
// // // //             );
// // // //         }, 800);
// // // //         return () => {
// // // //             clearInterval(timer);
// // // //         };
// // // //     }, []);

// // // //     return (
// // // //         <div>
// // // //             <h4>How to show upload/download percentage in ReactJS?</h4>
// // // //             <Box position="relative" display="inline-flex">
// // // //                 <CircularProgress
// // // //                     variant="determinate"
// // // //                     value={uploadOrDownloadCount}
// // // //                 />
// // // //                 <Box
// // // //                     bottom={0}
// // // //                     right={0}
// // // //                     top={0}
// // // //                     justifyContent="center"
// // // //                     left={0}
// // // //                     display="flex"
// // // //                     alignItems="center"
// // // //                     position="absolute"
// // // //                 >
// // // //                     {`${Math.round(uploadOrDownloadCount)}%`}
// // // //                 </Box>
// // // //             </Box>
// // // //         </div>
// // // //     );
// // // // }

// // // // import React from "react";
// // // // import { CKEditor } from "@ckeditor/ckeditor5-react";
// // // // import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// // // // import axios from "axios";
// // // // import { uploadPlugin } from "../../Data/functions";

// // // // const Test = () => {
// // // //     return (
// // // //         <div className="App">
// // // //             <h2>Using CKEditor 5 build in React</h2>
// // // //             <CKEditor
// // // //                 config={{
// // // //                     extraPlugins: [uploadPlugin],
// // // //                 }}
// // // //                 editor={ClassicEditor}
// // // //                 data="<p>Hello from CKEditor 5!</p>"
// // // //                 // onReady={(editor) => {
// // // //                 //     // You can store the "editor" and use when it is needed.
// // // //                 //     console.log("Editor is ready to use!", editor);
// // // //                 // }}
// // // //                 onChange={(event, editor) => {
// // // //                     const data = editor.getData();
// // // //                     // console.log({ event, editor, data });
// // // //                     console.log(data);
// // // //                 }}
// // // //                 // onBlur={(event, editor) => {
// // // //                 //     console.log("Blur.", editor);
// // // //                 // }}
// // // //                 // onFocus={(event, editor) => {
// // // //                 //     console.log("Focus.", editor);
// // // //                 // }}
// // // //             />
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Test;

// // // // import React, { Suspense } from "react";
// // // // import { useTranslation } from "react-i18next";

// // // // function HeaderComponent() {
// // // //     const { t, i18n } = useTranslation("common");
// // // //     return (
// // // //         <>
// // // //             <h1>{t("welcome.title", { framework: "NdeTek" })}</h1>
// // // //             <button onClick={() => i18n.changeLanguage("fre")}>Fre</button>
// // // //             <button onClick={() => i18n.changeLanguage("en")}>en</button>
// // // //         </>
// // // //     );
// // // // }

// // // // function App() {
// // // //     return (
// // // //         <Suspense fallback="loading">
// // // //             <div className="App">
// // // //                 <HeaderComponent />
// // // //             </div>
// // // //         </Suspense>
// // // //     );
// // // // }

// // // // export default App;

// // // import React, { Component } from "react";
// // // import Editor from "ckeditor5-custom-build/build/ckeditor";
// // // import { CKEditor } from "@ckeditor/ckeditor5-react";

// // // const editorConfiguration = {
// // //     toolbar: ["bold", "italic"],
// // // };

// // // class App extends Component {
// // //     render() {
// // //         return (
// // //             <div className="App">
// // //                 <h2>Using CKEditor 5 from online builder in React</h2>
// // //                 <CKEditor
// // //                     editor={Editor}
// // //                     config={editorConfiguration}
// // //                     data="<p>Hello from CKEditor 5!</p>"
// // //                     onReady={(editor) => {
// // //                         // You can store the "editor" and use when it is needed.
// // //                         console.log("Editor is ready to use!", editor);
// // //                     }}
// // //                     onChange={(event, editor) => {
// // //                         const data = editor.getData();
// // //                         console.log({ event, editor, data });
// // //                     }}
// // //                     onBlur={(event, editor) => {
// // //                         console.log("Blur.", editor);
// // //                     }}
// // //                     onFocus={(event, editor) => {
// // //                         console.log("Focus.", editor);
// // //                     }}
// // //                 />
// // //             </div>
// // //         );
// // //     }
// // // }

// // // export default App;

// // import ClassicEditor from "../../ckeditor5/build/ckeditor";
// // import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// // import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// // import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// // import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";

// // ClassicEditor.create(document.querySelector("#editor"), {
// //     plugins: [Essentials, Paragraph, Bold, Italic],
// //     toolbar: ["bold", "italic"],
// // })
// //     .then((editor) => {
// //         console.log("Editor was initialized", editor);
// //     })
// //     .catch((error) => {
// //         console.error(error.stack);
// //     });

// import React, { Component } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "../../ckeditor5";

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h2>Using CKEditor 5 build in React</h2>
//                 <CKEditor
//                     editor={ClassicEditor}
//                     data="<p>Hello from CKEditor 5!</p>"
//                     onReady={(editor) => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log("Editor is ready to use!", editor);
//                     }}
//                     onChange={(event, editor) => {
//                         const data = editor.getData();
//                         console.log({ event, editor, data });
//                     }}
//                     onBlur={(event, editor) => {
//                         console.log("Blur.", editor);
//                     }}
//                     onFocus={(event, editor) => {
//                         console.log("Focus.", editor);
//                     }}
//                 />
//             </div>
//         );
//     }
// }

// export default App;

import { CKEditor } from "@ckeditor/ckeditor5-react";
import FullEditor from "ckeditor-ndetek";
import { ckEditorConfig } from "../../Data/data";

const Test = () => {
    return (
        <CKEditor
            editor={FullEditor}
            config={ckEditorConfig}
            onChange={(event, editor) => {
                const data = editor.getData();
                console.log(data);
            }}
        />
    );
};

export default Test;
