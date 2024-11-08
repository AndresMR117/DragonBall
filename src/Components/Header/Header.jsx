import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://plantillasparasublimar.com/wp-content/uploads/2022/07/Dragon-Ball-Z-Fondo-negro-vector.jpg" alt="Logo React And Morty" />
       <br />  <h1 id="dragonTitulo">The Dragon Ball API</h1> <br/>
        <p>Characters</p>
        <NavBar/>
    </header>
  )
}

export default Header