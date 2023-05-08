import React, { useState, useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/UI/Profile";
import Projects from "./components/UI/Projects";
import Skills from "./components/UI/Skills";
import Contact from "./components/UI/Contact";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(()=>{
    Aos.init();
  }, []);

  return (
    <>
      <Header showModal={showModal}/>
        <main>
          <Profile />
          <Projects showModal={showModal} setShowModal={setShowModal}/>
          <Skills />
          <Contact />
        </main>
      <Footer />
    </>
  );
}

export default App;
