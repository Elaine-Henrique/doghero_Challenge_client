import React, { Component } from 'react';
import axios from 'axios';

class AddWalk extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      day: '', 
      time: '', 
      where: '', 
      owner: {},
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { day, time, where } = this.state;

    axios
    .post(`http://localhost:5000/api/walk`, { day, time, where }, { withCredentials: true })
      .then(() => {
        this.setState({ day: '', time: '', where: ''});
      })
      .catch((error) =>       
      this.setState({ day: '', time: '', where: ''})
      )
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="id-list">
        <form onSubmit={this.handleFormSubmit}>
          <label>Qando:</label>
          <input type="text" name="day" value={this.state.day} onChange={e => this.handleChange(e)} />
          <label>Horario:</label>
          <input type="text" name="time" value={this.state.time} onChange={e => this.handleChange(e)} />
          <label>Onde:</label>
          <input type="text" name="where" value={this.state.where} onChange={e => this.handleChange(e)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddWalk;