import React from "react";
import AppDemoBootstrap from "./Tutors/AppDemoBootstrap";
import HtmlHeader from "./Components/HtmlHeader";
import EvernoteCloneApp from "./EvernoteClone/EvernoteCloneApp";

const EntryPoint = () => {
  return (
    <>
      <HtmlHeader />
      <EvernoteCloneApp />
      {/* <AppDemoBootstrap /> */}
    </>
  );
};

export default EntryPoint;
