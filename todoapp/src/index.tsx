import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux"
import { Provider } from "react-redux"
// import App from "./App";
// import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Hello from "./Containers/HelloContainer";
import { enthusiasm } from "./reducers";

const store = createStore(enthusiasm, { enthusiasmLevel: 1, languageName: "Typescript" })

ReactDOM.render(
    <Provider store = { store }>
        <Hello />
    </Provider>,
    document.getElementById("root") as HTMLElement);
registerServiceWorker();
