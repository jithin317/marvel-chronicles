import { Fragment } from "react";
import Index from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <ToastContainer stacked />
      <Index />
    </Fragment>
  );
}

export default App;
