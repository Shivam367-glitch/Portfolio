import React, { Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
 
// Lazy load components
const Home = React.lazy(() =>  import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Projects = React.lazy(() => import("./components/Project/Projects"));
const Contact = React.lazy(() => import("./components/Contact/Contact"));
const Resume = React.lazy(() => import("./components/Resume/Resume"));
const NotFound=React.lazy(()=>import("./components/NotFound/NotFound"));

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <Suspense fallback="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
