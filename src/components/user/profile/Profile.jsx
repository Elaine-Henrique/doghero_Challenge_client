import React, { Component } from 'react';
import axios from 'axios';
import './styless.css';

import FileUpload from '../../auth/service/file-upload';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    const { user } = this.props;
    this.setState({ user });
  }

  getUserInfo = () => {
    axios.get(`http://localhost:5000/api/user/${this.state.user._id}`, { withCredentials: true })
      .then(response => { this.setState(response.data) })
      .catch(err => { console.log(err) });
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
    const { image } = this.state;

    axios
      .put(`http://localhost:5000/api/user/${this.state._id}`, { image }, { withCredentials: true })
      .then(() => {
        this.getUserInfo();
      })
      .catch(error => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1> My Profile</h1>              
      </div>
    )
  }
};

export default Profile;
