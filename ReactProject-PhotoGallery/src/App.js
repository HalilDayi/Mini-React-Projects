import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ImageBox from "./components/ImageBox";
import Enterance from "./components/Enterance";
import Header from "./components/Header";
import Footer from "./components/Footer"
import './App.css';
import Img1 from "./images/flower.jpg";
import Img2 from "./images/stone.jpg";
import Img3 from "./images/bornit.jpg";
import Img4 from "./images/fossil.jpg";
import Img5 from "./images/owl.jpg";
import Img6 from "./images/little-alligator.jpg";
import Img7 from "./images/lizard.jpg";
import Img8 from "./images/salamender.jpg";
import Img9 from "./images/frog.jpg";
import Img10 from "./images/frog.jpeg";

const images = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10
];

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/gallery">
          <ImageBox images={images}/>
        </Route>
        <Route path="/">
          <Enterance images={images}/>
        </Route>
      </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
