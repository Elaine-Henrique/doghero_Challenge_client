import React, { Component } from 'react';
import AuthService from '../service/auth-service';
import { Link, Redirect } from 'react-router-dom';
import '../styles.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '', 
      password: '', 
      redirect: false,
      message: '', 
    };
    this.service = new AuthService();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const {username, password} = this.state;
    this.service.login(username, password)
      .then((response) => {
        this.setState({ 
          username: "", 
          password: "", 
          redirect: true });
        this.props.getUser(response)
      })
      .catch(error => this.setState({ message: error.message }))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />
    }
    return (

      <div className="row">
        <div className="login-side">
        </div>
        <div className="container d-flex justify-content-end auth-login-custom login-side">
          <div className="col-lg-6 login-form">
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" name="username" placeholder="Digite seu Email" value={this.state.username} onChange={e => this.handleChange(e)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" name="password" placeholder="Digite sua senha" value={this.state.password} onChange={e => this.handleChange(e)} />
              </div>

              <input className="btn btn-custom text-uppercase" type="submit" value="LOGIN" />

            </form>
            {
              this.state.message ?
                <p style={{ color: "red" }}>{this.state.message}</p>
                :
                null
            }
            
            <small className="form-text text-muted">
              Ainda não tem uma conta?
            <Link to={"/signup"}> Cadastre-se </Link>
            </small>
          </div>
        </div>
      </div>

    )
  }
}
export default Login;