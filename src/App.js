import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/service/auth-service';

import NavBar from './components/navbar/Navbar';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';
import Footer from './components/footer/Footer';
import Home from './components/home/Home'; import Profile from './components/user/profile/Profile';

import Sidebar from './components/user/sidebar/Sidebar';
import PetList from './components/pet/allpets/AllPets';
import AddPet from './components/pet/addPet/AddPet';
import DogWalkerList from './components/user/dogwalker/DogWalkerList';
import FavoriteList from './components/user/favoritedogwalker/FavoriteList';
import AddWalk from './components/walk/addwalk/AddWalk';
import WalkList from './components/walk/allwalks/WalkList';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  };

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: (userObj)
    });
  };

  logoutUser() {
    this.service.logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.getTheUser(null);
      });
  }

  render() {
    this.fetchUser()
    const { loggedInUser } = this.state
    if (loggedInUser) {
      return (
        <div className="App">
          <NavBar
            loggedInUser={loggedInUser}
            getTheUser={this.getTheUser}
          />
          <Sidebar
            loggedInUser={loggedInUser}
            getTheUser={(obj) => this.getTheUser(obj)}
          />
          <div className="content">
            <Switch>
              <Route
                exact path="/profile"
                render={() => <Profile
                  user={loggedInUser}
                  getTheUser={(obj) => this.getTheUser(obj)}
                />}
              />

              <Route
                exact path="/pets"
                render={() => <PetList props={loggedInUser} />
                }
              />

              <Route
                exact path="/add-pet"
                render={() => <AddPet props={loggedInUser} />
                }
              />

              <Route
                path="/dogWalker"
                exact component ={DogWalkerList} />
                }
              />

              <Route
                exact path="/favorite-walkers"
                render={() => <FavoriteList props={loggedInUser} />
                }
              />

              <Route 
                exact path="/add-walk"
                render={() => <AddWalk props={loggedInUser}/>
                }
              />

              <Route 
                exact path="/schedule"
                render={() => <WalkList props={loggedInUser}/>
                }
              />


            </Switch>
          </div>
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="App">
          <NavBar
            loggedInUser={loggedInUser}
            fetchUser={this.fetchUser}
          />
          <Switch>
            <Route exact path='/signup'
              render={() => <Signup getUser={(obj) => this.getTheUser(obj)} />}
            />
            <Route exact path='/login'
              render={() => <Login getUser={(obj) => this.getTheUser(obj)} />}
            />
            <Route exact path='/'
              render={() => <Home />}
            />
          </Switch>

          <Footer />
        </div>
      )
    }
  }
};

export default App;
