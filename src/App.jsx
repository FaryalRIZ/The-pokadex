import Header from "./components/Header"
import PokiCard from "./components/PokiCard"
import SideNav from "./components/SideNav"
import TypeCard from "./components/TypeCard"
import { useState } from "react"

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)  // Fixed this line
  const [showSlideMenu, setShowSlideMenu] = useState(true)

  function handleToggleMenu() {
    setShowSlideMenu(!showSlideMenu)
  }

  function handleCloseMenu() {
    setShowSlideMenu(false)
  }
  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav 
      showSlideMenu={showSlideMenu}
      selectedPokemon={selectedPokemon} 
      setSelectedPokemon={setSelectedPokemon} 
      handleCloseMenu={handleCloseMenu} 
       
      />  {/* Fixed prop passing */}
      <PokiCard selectedPokemon={selectedPokemon} />  {/* Passed the selectedPokemon correctly */}
      <TypeCard />
    </>
  )
}

export default App
