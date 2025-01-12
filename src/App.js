import AboutUs from "./javascript_files/AboutUs";
import Homepage from "./javascript_files/Homepage";
import ITServices from "./javascript_files/ITServices";
import Sidebar from "./javascript_files/Sidebar";
import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import Footer from "./javascript_files/Footer";
import Partner from "./javascript_files/Partner";

function App() {
  const sidebarRef = useRef();
  function opensidebar() {
    sidebarRef.current.style.transform = "translate(0px)";
    sidebarRef.current.style.transition = "transform 1s ease";
  }
  return (
    <section className="app-main">
      <Sidebar sidebarRef={sidebarRef} />
      <Homepage opensidebar={opensidebar} />
      <AboutUs />
      <ITServices />
      <Partner />
      <Footer />
    </section>
  );
}

export default App;
