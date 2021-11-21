import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import faker from "faker";
import Button from "./Elements/Button";
import { ThemeProvider } from "styled-components";
import axios from "axios";

const theme = {
  primary: "#4CAF50",
  mango: "yellow",
};
function App() {
  const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([
    {
      id: 1,
      avatar: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: faker.name.jobTitle(),
    },
    {
      id: 2,
      avatar: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: faker.name.jobTitle(),
    },
    {
      id: 3,
      avatar: faker.image.avatar(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: faker.name.jobTitle(),
    },
  ]);
  const changeNameHandler = (event, id) => {
    // 1. Which card
    const cardIndex = cards.findIndex((card) => card.id === id);
    console.log("cardIndex", cardIndex);
    // 2. make a copy of the cards
    const cards_copy = [...cards];
    // 3. Change the name of the specific card
    cards_copy[cardIndex].name = event.target.value;
    // 4. Set the cards with the latest version of copy cards
    setCards(cards_copy);
  };
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards];
    cards_copy.splice(cardIndex, 1);
    console.log("cards_copy", cards_copy);
    console.log("cards", cards);
    setCards(cards_copy);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const data = res.data.map((x) => ({...x, avatar: faker.image.avatar(),title: faker.name.jobTitle()}))
      console.log('Res',data);
      setCards(data);
    })
  },[])

  const classes = ["button"];
  if (cards.length < 3) classes.push("pink");
  if (cards.length < 2) classes.push("red text");

  const buttonMarkup = (
    <div>
      <button className="button button-red">YES</button>
      <button className="button button-blue">NO</button>
    </div>
  );
  const cardMarkup =
    showCard &&
    cards.map((card, index) => (
      <Card
        key={card.id}
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        onChangeName={(event) => changeNameHandler(event, card.id)}
        onDelete={() => deleteCardHandler(index)}
      >
        {buttonMarkup}
      </Card>
    ));

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="primary" length={cards.length}>
          Toggle
        </Button>
        <button className={classes.join(" ")} onClick={toggleShowCard}>
          Toggle show/hide
        </button>
        {cardMarkup}
      </div>
    </ThemeProvider>
  );
}

export default App;
