import "./App.css";
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

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <Box />
      <Rectangle />
      <Soluiton />
      <Cases />
      <Brands />
      <Details />
      <Studies />
    </div>
  );
}

export default App;
