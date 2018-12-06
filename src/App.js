import React from 'react'
import Form from './Form'
import Card from './Card'

class App extends React.Component {
  state = { cards:
    [
      {id: 1, front: 'test1', back: 'tes2'}, 
      {id: 2, front: 'asdf', back: 'tjdes2'}, 
      {id: 3, front: 'tdjgfdj', back: 'tesxcs'} 
    ], 
    editing: null, 
    cardNumber: 0 ,
    showCard: false

  }

  handleSubmit = (card) => {
    const {editing} = this.state
    let cards

    if (editing) {
      cards = this.state.cards.map( c => {
        if (c.id === editing.id)
          return card
        return c
      })
    } else {
      cards = [...this.state.cards, card]
    }
    this.setState({ cards, editing: null })
  }

  flipCard = (id) => {
    const { cards } = this.state
    this.setState({
      cards: cards.map(card => {
        if( card.id === id) {
          return {
            ...card,
            show: card.show ==='front' ? 'back' : 'front'
          }
        }
        return card
      })
    })
  }

  toggleEdit = (id = null) => {
    const {cards} = this.state
    const editing = cards.find(c => c.id === id)
    this.setState({ editing })
  }

  deleteCard = (id) => {
    const {cards} = this.state
    const remaining = cards.filter(c => c.id !==id)
    this.setState({cards: remaining})
  }

  showCards = (cardNumber) => {
    const {cards} = this.state
    return (
      <div className="row">
        { cards.map( card =>
            <Card 
              key={card.id}
              {...card}
              flipCard={this.flipCard}
              toggleEdit={this.toggleEdit}
              deleteCard={this.deleteCard}
            />
          )
        }
      </div>
    )
  }


  nextCard = () => {
    const {cardNumber} = this.state
    return this.setState({cardNumber: cardNumber + 1})
    this.state.cards.filter
  }

  prevCard = () => {
    const {cardNumber} = this.state
    return this.setState({cardNumber: cardNumber - 1})
  }

  render () {
    const {cards, editing} = this.state
    return (
      <div className="container">
        <Form  editing={editing} handleSubmit={this.handleSubmit}/>
        { cards.length ? this.showCards() : <h1 className="center">No Cards</h1> }
      </div>
    )
  }
}

export default App