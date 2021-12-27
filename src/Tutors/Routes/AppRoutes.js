import React from "react";
import { Routes, Route } from "react-router-dom";

import Post from "../Components/Post";
import Home from "../Components/Home";
import Contact from "../Components/Contact";
import About from "../Components/About";
import PageNotFound from "../Components/PageNotFound";
import ProtectedRoute from "../Routes/ProtectedRoute";
import AppDemoContextReducer from "../AppDemoContextReducer";
import AppDemoMemo from "../AppDemoMemo";
import AppDemoReducer from "../AppDemoReducer";
import AppDemoReducerEffect from "../AppDemoReducerEffect";
import AppDemoUseHook from "../AppDemoUseHook";
import AppDemoUseRef from "../AppDemoUseRef";
import AppDemoRedux from "../AppDemoRedux";
import AppDemoReduxToolkit from "../AppDemoReduxToolkit";
import AppDemoContext from "../AppDemoContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ProtectedRoute />}>
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/posts/:postId" element={<ProtectedRoute />}>
        <Route path="/posts/:postId" element={<Post />} />
      </Route>
      <Route path="/demo-context" element={<AppDemoContext />} />
      <Route path="/demo-context-reducer" element={<AppDemoContextReducer />} />
      <Route path="/demo-memo" element={<AppDemoMemo />} />
      <Route path="/demo-reducer" element={<AppDemoReducer />} />
      <Route path="/demo-reducer-effect" element={<AppDemoReducerEffect />} />
      <Route path="/demo-use-hook" element={<AppDemoUseHook />} />
      <Route path="/demo-use-ref" element={<AppDemoUseRef />} />
      <Route path="/demo-redux" element={<AppDemoRedux />} />
      <Route path="/demo-redux-toolkit" element={<AppDemoReduxToolkit />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
