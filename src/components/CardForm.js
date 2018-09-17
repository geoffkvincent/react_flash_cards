import React from 'react';

class CardForm extends React.Component {
  state = { question: ''}

  handleChange = (e) => {
    this.setState({ question: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state.question);
    this.setState({ question: ''})
  }

  render() {
    return (
      <form on submit={this.handleSubmit}>
        <input
          placeholder='Add a Question'
          required
          value={this.state.question}
          onchange={this.handleChange}
        />
      </form>
    )
  }
}

export default CardForm