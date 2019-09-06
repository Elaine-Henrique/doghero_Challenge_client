import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DogWalkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfWalkers: [],
    };
  }

  getAllWalkers = () => {
    axios.get('http://localhost:5000/api/walkers')
      .then(res => {
        this.setState({
          listOfWalkers: res.data
        });
      });
  }

  componentDidMount() {
    this.getAllWalkers();
  }

  render() {
    return (
      <div style={{ width: '80%', float: "left" }}>
        <div>
          <h6 >Dog Walkers</h6>

          {
            this.state.listOfWalkers.map((walker, index) => {
              let walkerId = walker._id;
              return (
                <div key={index}>
                  <Link to={`pet/${walkerId}`}>
                    <h5>{walker.name}</h5>
                    <img src={walker.image} alt={walker.name} style={{ width: '50px', height: '70px' }} />
                  </Link>
                  <Link to={`/add-favorite`}>
                    Adicionar aos Favoritos
                    </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default DogWalkerList;