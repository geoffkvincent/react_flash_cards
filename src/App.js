import React from 'react';
import CardForm from './components/CardForm';
import CardContent from './components/CardContent'


class App extends React.Component {
  state = { cards: [] }

  addCard = (question) => {

  }

  updateCard = (id) => {

  }

  deleteCard = (id) => {

  }

  render() {
    return (
      <div>
        <CardForm addCard={this.addCard} />
        <CardContent
          cards={this.state.cards}
          updateCard={this.updateCard}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
