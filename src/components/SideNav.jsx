import { first151Pokemon, getFullPokedexNumber } from "../utils"
import { useState } from "react"

export default function SideNav(props) {
  const { selectedPokemon, setSelectedPokemon , handleToggleMenu, showSlideMenu} = props
  const [searchValue, setSearchValue] = useState("")
  const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
    if(toString(getFullPokedexNumber(eleIndex)).includes(searchValue))
    {return true}
    if(ele.toLowerCase().includes(searchValue.toLowerCase())) {return true}
    return false
  })
  return (
   <nav className={'' + (!showSlideMenu ? 'open' : '' )}>
    <div className={"header " + (!showSlideMenu ? 'open' : '' )}>
      <button
      onClick={handleToggleMenu}
      className="open-nav-button">
      <i class="fa-solid fa-arrow-left-long"></i> 
      </button>
      <h1 className="text-gradiant"> Pokedex </h1>
    
    </div>
    <input placeholder='e.g. 001' value={searchValue} onChange={(e) => {
      setSearchValue(e.target.value)
    }}/>
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        const truePokadexNumber = first151Pokemon.indexOf(pokemon)
        return (
          <button onClick={() => {
            setSelectedPokemon(truePokadexNumber)
          }}
          key={pokemonIndex} className={'nav-card ' + (
            pokemonIndex === selectedPokemon ? 'nav-card-selected' : ' '
          )}>
           <p> {getFullPokedexNumber(truePokadexNumber)} </p>
            <p> {pokemon} </p>
          </button>
        )
      })}
   </nav>
  )
}
