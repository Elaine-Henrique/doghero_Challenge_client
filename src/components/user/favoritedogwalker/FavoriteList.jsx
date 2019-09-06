import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class FavoriteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfFavorite: [],
    };
  }

  getWalkerInfo() {
    axios.get(`http://localhost:5000/api/user/`, { withCredentials: true })

      .then((res) => {
        this.setState({
          listOfFavorite: res.data,
        })
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getWalkerInfo();
  }

  deleteFavorite(walker) {
    axios.put(`http://localhost:5000/api/remove-favorite/${walker}`, {}, { withCredentials: true })
      .then(() => {
        this.getWalkerInfo();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    if (this.state.listOfFavorite.length > 0) {
      return (
        <div style={{ width: '80%', float: "left" }}>
          <h6 >Dog Walkers Favoritos</h6>
          {
            this.state.listOfFavorite.map((walker, index) => {
              let walkerId = walker._id;
              return (
                <div key={index}>
                  <Link to={`/api/user/${walkerId}`}>
                    <h5>{walker.name}</h5>
                    <img src={walker.image} alt={walker.name} style={{ width: '50px', height: '70px' }} />
                  </Link>

                  <button onClick={(walker) => this.deleteFavorite(walkerId)} >
                    Deletar
                </button>
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div>
          <h6 >Dog Walkers Favoritos</h6>
          <Link to={`/dogwalker`}>
            Cadastrar
          </Link>
        </div>
      )
    }
  }
}

export default FavoriteList;