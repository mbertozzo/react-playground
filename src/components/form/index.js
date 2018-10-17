import React from 'react';
import style from './style.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange (event) {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  submitForm () {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, job} = this.state;
    
    return (
      <form>
        <label>Name</label>
        <input 
          type="text" 
          name="name"
          value={name}
          onChange={this.handleChange} />
        <label>Job</label>
        <input 
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />
        <input
          type="button"
          value="Submit"
          onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;