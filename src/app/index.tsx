import React from "react";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Welcome } from "../pages/Walcome";
import { Loader } from "../shared/ui/Loader";
import "./style.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader size={"200px"} />}>
        <Welcome />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
