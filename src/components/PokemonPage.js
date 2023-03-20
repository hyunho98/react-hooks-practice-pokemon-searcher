import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  useEffect(() => 
    fetch(`http://localhost:3001/pokemon`)
      .then((r) => r.json())
      .then((data) => setPCards(data))
  ,[])

  const [pCards, setPCards] = useState([])
  const [pSearch, setPSearch] = useState("")

  const filteredCards = pCards.filter((card) => 
    card.name.includes(pSearch))

  function addNewCard(newCard) {
    setPCards([...pCards, newCard])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewCard={addNewCard}/>
      <br />
      <Search pSearch={pSearch} setPSearch={setPSearch} />
      <br />
      <PokemonCollection pCards={pSearch ? filteredCards : pCards} />
    </Container>
  );
}

export default PokemonPage;
