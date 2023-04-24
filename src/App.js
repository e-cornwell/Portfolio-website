import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/UI/Profile"
import Skills from "./components/UI/Skills";

function App() {

  useEffect(()=>{
    Aos.init();
  }, []);

  return (
    <>
      <Header />
        <main>
          <Profile />
          <Skills />
        </main>
      <Footer />
    </>
  );
}

export default App;
