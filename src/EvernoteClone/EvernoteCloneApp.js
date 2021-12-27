import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Layouts/Navbar";

const EvernoteCloneApp = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <title>ReactJS Tutor</title>
      </Helmet>
      <BrowserRouter>
        <Navbar />
        {/* <AppRoutes /> */}
      </BrowserRouter>
    </div>
  );
};

export default EvernoteCloneApp;
