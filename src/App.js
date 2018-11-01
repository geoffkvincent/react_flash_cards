import React from 'react'
import Form from './Form'
import Card from './Card'

class App extends React.Component {
  state ={cards:[], editing: null}

  showCards = () => {
    const {cards} = this.state
    return (
      <div className="row">
        { cards.map( card =>
            <Card 
              key={card.id}
              {...card}
            />
          )
        }
      </div>
    )
  }

  render () {
    return (
      <div className="container">
        <Form  editing={editing}/>
        { cards.length ? this.showCards() : <h1 className="center">No Cards</h1> }
      </div>
    )
  }
}

export default App