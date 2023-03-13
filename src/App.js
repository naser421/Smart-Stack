import React from 'react'
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import Toolbar from './components/Toolbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useFlashcards } from './hooks/Flashcards';

function App() {
  const [CompleteCards] = useFlashcards();
  const totalCards = CompleteCards.length;
  const [CurrentID, setCurrentID] = useState(1);

  let goToPrev = () => {
    if ( isValidId(CurrentID - 1)) {
      setCurrentID(CurrentID - 1);
    }
    else {
      setCurrentID(totalCards);
    }
  }

  let goToNext = () => {
    if ( isValidId(CurrentID + 1)) {
      setCurrentID(CurrentID + 1);
    }
    else {
      setCurrentID(1);
    }
  };

  function isValidId(id) {
    return ( id <= totalCards && id >= 1);
  }

  return (
    <>
    <Toolbar></Toolbar>
    <Container className="container-main">
      <Card {...CompleteCards.find(item=> item.id === CurrentID)}></Card>
      <div className="action-buttons">
        <Button variant="warning" className="me-4 prev-next-btns" onClick={goToPrev}>Prev</Button>
        <Button variant="success" className="ms-4 prev-next-btns" onClick={goToNext}>Next</Button>
      </div>
    </Container>
    </>
  );
}

export default App;