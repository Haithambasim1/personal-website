import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Services from "./component/services/Services";
import Qualifacation from "./component/qualifecations/Qualifacation";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import ScrollUp from "./component/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifacation />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
