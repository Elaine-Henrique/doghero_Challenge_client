import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPets: [],
    };
  }

  getAllPets = () => {
    axios.get('http://localhost:5000/api/pets', {withCredentials:true})
    .then(res => {
      this.setState({
        listOfPets: res.data
      });
    });
  }

  componentDidMount() {
    this.getAllPets();
  }

  deletePet = (pet) => {
    axios.delete(`http://localhost:5000/api/pets/${pet}`, { withCredentials: true })
    .then(() => {
      this.getAllPets();
    })
    .catch(err => console.log(err));
  };

  render() {
    if (this.state.listOfPets.length > 0) {
      return (
        <div style={{ width: '80%', float: "left" }}>
          <div>
          <h6 >Meus Pets</h6>

            {
              this.state.listOfPets.map(( pet, index) => {
                let petId = pet._id;
                return (
                  <div key={index}>
                    <Link to={`pet/${petId}`}>
                      <h5>{pet.name}</h5>
                      <img src={pet.image} alt = {pet.name} style={{ width: '50px', height: '70px' }}/> 
                    </Link>
                    <button onClick={(pet) => this.deletePet(petId)}>
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
        <div >
          <h6>Meus Pets</h6>
          <Link to={`/add-pet`}>
            Cadastrar
          </Link>
        </div>
      )
    }    
  }
}
    
export default PetList;