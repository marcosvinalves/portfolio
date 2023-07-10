import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderPartial } from "./partials/HeaderPartial";
import './App.css'
import { HomePage } from "./pages/HomePage";
import { About } from "./sections/about"
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import {Contact} from "./sections/Contact"
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App main-container">
        <Container>
        <HeaderPartial/>
        <HomePage />
        </Container>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
