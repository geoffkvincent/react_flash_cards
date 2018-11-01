import React from 'react'
import Form from './Form'
import Card from './Card'

class App extends React.Component {
  state = {cards:[ {id: 1, front: 'what', back: 'ok', show: 'front'}, {id: 2, front: 'what', back: 'ok', show: 'back'}, {id: 3, front: 'what', back: 'ok', show: 'front'}], editing: null }

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

  toggleEdit = (id) => {

  }

  deleteCard = (id) => {

  }

  showCards = () => {
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

  render () {
    const {cards, editing} = this.state
    return (
      <div className="container">
        <Form  editing={editing}/>
        { cards.length ? this.showCards() : <h1 className="center">No Cards</h1> }
      </div>
    )
  }
}

export default App