import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import FileUpload from '../../auth/service/file-upload';

class SinglePet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getSinglePet();
  }
  

  getSinglePet = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/pets/${params.id}`, { withCredentials: true })
      .then(response => {
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
    const { params } = this.props.match;    
    axios.put(`http://localhost:5000/api/pets/${params.id}`, { name, size, info, image }, { withCredentials: true })
      .then(() => {
        this.props.getSinglePet();
      })
      .catch(error => console.log(error));
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value});
  };

  render() {
    return (
      <div id="edit-animal">
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Porte:</label>
          <input
            type="text"
            name="size"
            value={this.state.size}
            onChange={e => this.handleChange(e)}
          />
          <label>Outras Informaçōes:</label>
          <input
            type="text"
            name="info"
            value={this.state.foto}
            onChange={e => this.handleChange(e)}
          />
          <label>Foto:</label>
          <input 
          type="file" 
          name="image" 
          onChange={ e => this.handleFileUpload(e)}/>

          <input type="submit" value="Submit" />
        </form>
        <Link to={"/pets"}>Voltar</Link>
      </div>
    );
  }
}

export default SinglePet;
