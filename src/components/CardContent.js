import React from 'react';
import Question from './Question'

const CardContent = ({ cards, question, updateCard, deleteCard }) => (
  <div className="row">
    { cards.map( question =>
        <Question
          key={question.id}
          {...question}
          updateCard={updateCard}
          deleteCard={updateCard}
        />
      )
    }
  </div>
)

export default CardContent;