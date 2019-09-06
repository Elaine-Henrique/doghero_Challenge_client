import React, { Component } from 'react';
import FileUpload from '../../auth/service/file-upload';
import axios from 'axios';

class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', size: '', info: '', image: '' };
  }

  handleFileUpload(e) {
    const uploadData = new FormData();
    uploadData.append("image", e.target.file);
    FileUpload.handleUpload(uploadData)
    .then((response) => {
      this.setState({ image: response.secure_url });
    })
    .catch((err) => { throw err; });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, size, info, image } = this.state;

    axios
    .post(`http://localhost:5000/api/pets`, { name, size, info, image }, { withCredentials: true })
      .then(() => {
        this.props.getAllPets()
        this.setState({ name: '', size: '', info: '', image: ''});
      })
      .catch((error) =>       
      this.setState({ name: '', size: '', info: '', image: '' })
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
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          <label>Porte:</label>
          <input type="text" name="size" value={this.state.size} onChange={e => this.handleChange(e)} />
          <label>Outras Informaçōes:</label>
          <input type="text" name="info" value={this.state.info} onChange={e => this.handleChange(e)}/>
          <label>Foto:</label>
          <input type="file" name="image" onChange={ e => this.handleChange(e)}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddPet;