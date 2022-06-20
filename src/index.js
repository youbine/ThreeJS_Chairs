import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BounceLoader } from "react-spinners";
const Loader = () => {
  return (
    <>
      <div className="App">
        <div className="text minichairs">
          <span>looking for good chairs?</span>
        </div>
        <BounceLoader color={"black"} size={100} />
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
