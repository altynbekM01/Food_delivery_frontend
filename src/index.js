import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import formData from "C:/Users/Altynbek/Desktop/React/project/react-multi-page-website/src/components/Login.jsx"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Enter,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  Drinks,
} from "./components";

ReactDOM.render(
  <Router>
    <Enter />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/drinks" element={<Drinks />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

