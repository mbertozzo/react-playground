import React from 'react';
import styles from './style.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: this.props.getErrorMessage('')
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit (event) {
    event.preventDefault();
    const value = event.target.elements.username.value;
    const error = this.props.getErrorMessage(value);
    
    if (error) {
      alert(`error: ${error}`)
    } else {
      alert(`success: ${value}`)
    }
  }
  
  handleChange (event) {
    const {value} = event.target
    this.setState({
      error: this.props.getErrorMessage(value),
    })
  }
  
  render() {
    const {error} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={this.handleChange}
            name="username"
          />
        </label>
        {error ? (
          <div style={{color: 'red'}}>
            {error}
          </div>
        ) : null}
        <button
          disabled={Boolean(error)}
          type="submit"
        >
          Submit
        </button>
      </form>
    )
  }
}