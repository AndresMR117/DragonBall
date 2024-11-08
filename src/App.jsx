import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"

import About from "./Pages/About/About";"./Pages/About/About"
import Header from "./Components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage";
import CharacterPage from "./Pages/CharacterPage/CharacterPage"
import AboutPage from "./Pages/AboutPage/AboutPage"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div id="div-header">
          <div id="menu">
            <Header/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/character/:races" element={<CharacterPage/>}/>
          <Route path="/details/:id" element={<AboutPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App