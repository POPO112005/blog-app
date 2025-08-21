import Navbar from "../components/Navbar"
import { Outlet } from "react-router"
import Footer from "../components/Footer"
import { useState, useEffect } from "react";
const Mainlayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");
   useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("mode", theme);
  }, [theme]);
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Outlet />
      </main>
        
      <Footer />
    </>
  )
}

export default Mainlayout