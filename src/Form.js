import React from 'react'

class Form extends React.Component {
  initialState = { front: '', back: ''}
  state = {...this.initialState}

  componentDidUpdate(prevProps, prevState) {
    const {editing} = this.props
    if (prevProps.editing !== this.props.editing) {
      if (editing)
        this.setState({...editing})
    }
  }

  cancel = () => {
    const {editing} = this.props
    if (editing) {
      this.setState({...editing})
    } else {
      this.setState({...this.initialState})
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.prevent.default()
    const { editing, handleSubmit} = this.props
    const {front, back} = this.state
    let card = editing || {}
    card.front = front
    card.back = back
    card.id = card.id || this.getId()
    handleSubmit(card)
    this.setState({ ...this.initialState })
  }

  genId = () => {
    return Math.floor(Math.random() * 1000)
  }

  render () {
    const { front, back } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s6">
          <input 
            placeholder='Front of Card'
            name='front'
            value={front}
            onChange={this.handleChange}
            required
          />
          <input 
            placeholder='Back of Card'
            name='back'
            value={back}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="button" className="btn" onClick={this.cancel}>
          cancel
        </button>
        <button className="btn">Submit</button>
      </form>
    )
  }
}

export default Form