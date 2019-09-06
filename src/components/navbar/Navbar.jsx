import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import AuthService from '../auth/service/auth-service';

const Navbar = ({ loggedInUser, getTheUser }) => {
  const service = new AuthService();

  //Logout
  const logoutUser = () => {
    service.logout().then(() => {
      getTheUser(null);
    });
  };

  if (loggedInUser && loggedInUser.role === 'User') {
    return (
      <nav>
        <ul className='navList' >
          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/profile',
              }}
            >
              Profile
            </Link>
          </li>
          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/walks',
              }}
            >
              Agendar
            </Link>
          </li>
          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/dogWalker',
              }}
            >
              Dog Walkers
            </Link>
          </li>
          <li className='listItem'>
            <Link className='listLink'
              to='/' onClick={logoutUser}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else if (loggedInUser && loggedInUser.role === 'DogWalker') {
    return (
      <nav>
        <ul className='navList' >
          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/profile',
              }}
            >
              Perfil
            </Link>
          </li>
          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/avaliable-walks',
              }}
            >
              Consultar Walks
            </Link>
          </li>
          <li className='listItem'>
            <Link className='listLink'
              to='/' onClick={logoutUser}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul className='navList' >
          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/',
              }}
            >
              Home
            </Link>
          </li>
          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/signup',
              }}
            >
              SignUp
            </Link>
          </li>

          <li className='listItem'>
            <Link className='listLink'
              to={{
                pathname: '/login',
              }}
            >
              LogIn
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Navbar;
