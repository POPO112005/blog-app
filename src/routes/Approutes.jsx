import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Home from "../pages/Home.jsx";
import Blogs from "../pages/Blogs.jsx";
import About from "../pages/About.jsx";
import Pagenotfound from "../pages/Pagenotfound.jsx";
import Mainlayout from "../layout/Mainlayout.jsx";
import Details from "../components/Details.jsx";
const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Mainlayout/>
          }
        >
          <Route index path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/blog/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Approutes;
