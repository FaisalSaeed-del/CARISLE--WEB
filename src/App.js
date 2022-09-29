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
// import Blog from "./components/new & blog/Blog";
// import Post from "./components/posts/Post";
import Help from "./components/help/Help";
import Footer from "./components/footer/Footer";
import Stdbox from "./components/studybox/Stdbox";

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
      <Stdbox />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
