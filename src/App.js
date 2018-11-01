import React from 'react'
import Form from './Form'
import Card from './Card'

class App extends React.Component {
  state = {cards:[ 
    {id: 1, front: 'why do you suck?', back: 'because your butt', show: 'front'}, 
    {id: 2, front: 'is coding hard?', back: 'yes', show: 'back'}, 
    {id: 3, front: 'does coding kinda suck?', back: 'yeah it kinda does', show: 'front'},
    ], 
    editing: null }

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
    this.setState({ cards: this.state.cards.filter( c => c.id !==id) })
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