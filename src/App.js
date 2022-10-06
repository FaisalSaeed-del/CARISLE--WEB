import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import Box from "./components/herobox/Box";
import Rectangle from "./components/rectangle/Rectangle";
import Soluiton from "./components/solution/Soluiton";
import Cases from "./components/cases/Cases";
import Brands from "./components/brand/Brands";
import Details from "./components/details/Details";
import Studies from "./components/studies/Studies";
import Help from "./components/help/Help";
import Footer from "./components/footer/Footer";
import Stdbox from "./components/studybox/Stdbox";
import Mobilenavigate from "./components/mobileresponse/Mobilenavigate";

function App() {
  return (
    <div>
      <Header />
      <div className="hidden lg:block">
        <Nav />
      </div>
      <div className="block lg:hidden">
        <Mobilenavigate />
      </div>
      <Hero />
      <Box />
      <Rectangle />
      <Soluiton />
      <Cases />
      <Brands />
      <Details />
      <Studies />
      <Stdbox />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
