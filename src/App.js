import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/UI/Profile";
import Projects from "./components/UI/Projects";
import Skills from "./components/UI/Skills";
import Contact from "./components/UI/Contact";

function App() {

  useEffect(()=>{
    Aos.init();
  }, []);

  return (
    <>
      <Header />
        <main>
          <Profile />
          <Projects />
          <Skills />
          <Contact />
        </main>
      <Footer />
    </>
  );
}

export default App;
