import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Main, BlogPage, ProjectPage } from "./pages";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="app">
      <ToastContainer closeOnClick={false} />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />{" "}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
