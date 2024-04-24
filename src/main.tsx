import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./scss/style.scss";
import { BrowserRouter } from "react-router-dom";
import "./firebase.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
