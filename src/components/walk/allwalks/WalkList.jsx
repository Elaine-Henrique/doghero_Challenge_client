import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class WalkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfWalks: [],
    };
  }

  getWalks = () => {
    axios.get('http://localhost:5000/api/walk', {withCredentials:true})
    .then(res => {
      this.setState({
        listOfWalks: res.data
      });
    });
  }

  componentDidMount() {
    this.getWalks();
  }

  deleteWalk = () => {
    axios.delete(`http://localhost:5000/api/walk/${this.state.walk._id}`, { withCredentials: true })
    .then(() => {
      this.getWalks();
    })
    .catch(err => console.log(err));
  };

  render() {
    if (this.state.listOfWalks.length > 0) {
      return (
        <div style={{ width: '80%', float: "left" }}>
          <div>
            {
              this.state.listOfWalks.map(walk => {
                return (
                  <div key={walk._id}>
                    <h5>{walk.name}</h5>
                    <Link to={`walk/${walk._id}`}>
                      <img src={walk.image} alt = {walk.name} style={{ width: '50px', height: '70px' }}/> 
                    </Link>
                    <button onClick={(walk) => this.deleteWalk(walk._id)}>
                      Deletar
                    </button>
                  </div>         
                )
              })
            }
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h6>Meus Agendamentos</h6>
          <Link to={"/add-walk"}>Adicionar</Link>
        </div>
      )
    }    
  }
}
    
export default WalkList;