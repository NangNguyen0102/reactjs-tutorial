import React from "react";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post";
import PageNotFound from "./Components/PageNotFound";
import ProtectedRoute from "./Components/ProtectedRoute";
import AppDemoContext from "./AppDemoContext";
import AppDemoContextReducer from "./AppDemoContextReducer";
import AppDemoMemo from "./AppDemoMemo";
import AppDemoReducer from "./AppDemoReducer";
import AppDemoReducerEffect from "./AppDemoReducerEffect";
import AppDemoUseHook from "./AppDemoUseHook";
import AppDemoUseRef from "./AppDemoUseRef";

const AppDemoBootstrap = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
          <Route
            path="/demo-context-reducer"
            element={<AppDemoContextReducer />}
          />
          <Route path="/demo-memo" element={<AppDemoMemo />} />
          <Route path="/demo-reducer" element={<AppDemoReducer />} />
          <Route
            path="/demo-reducer-effect"
            element={<AppDemoReducerEffect />}
          />
          <Route path="/demo-use-hook" element={<AppDemoUseHook />} />
          <Route path="/demo-use-ref" element={<AppDemoUseRef />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppDemoBootstrap;
