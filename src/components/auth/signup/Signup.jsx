import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import AuthService from '../service/auth-service';
import '../styles.css';

//Components
import Role from './form/Form';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			name: '',
			classWalker: '',
			classUser: '',
			role: '',
			showForm: false,
			message: '',
			redirect: false,
		};
		this.service = new AuthService();
	}

	handleFormSubmit(event) {
		event.preventDefault();
		const { username, password, name, role } = this.state;
		this.service.signup(username, password, name, role)
			.then(response => {
				this.setState({
					name: '',
					username: '',
					password: '',
					classWalker: '',
					classUser: '',
					role: '',
					showForm: false,
					message: '',
					redirect: true,
				});
				this.props.getUser(response)
			})
			.catch(error => this.setState({ message: error.message }))
	}


	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	handleForm(event) {
		const { name, value } = event.target;
		this.setState({
			showForm: true,
			classUser: 'displayBtn',
			[name]: value,
		});
	}

	handleClass(event) {
		const { name, value } = event.target;
		this.setState({
			showForm: true,
			classWalker: 'displayBtn',
			[name]: value,
		});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/profile" />
		}
		return (
			<div className="container d-flex justify-content-center auth-custom flex-wrap">

				<Role handleForm={e => this.handleForm(e)} handleClass={e => this.handleClass(e)} state={this.state} />

				{this.state.showForm ?
					<div className="col-lg-6">
						<form onSubmit={(event) => this.handleFormSubmit(event)}>
							<div className="form-group">
								<label htmlFor="name">Nome:</label>
								<input
									type="name"
									className="form-control"
									name="name"
									placeholder="Digite seu nome"
									value={this.state.name} onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email:</label>
								<input
									type="email"
									className="form-control"
									name="username"
									placeholder="Digite seu email"
									value={this.state.username}
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password">Password:</label>
								<input
									type="password"
									className="form-control"
									name="password"
									placeholder="Digite sua senha"
									value={this.state.password}
									onChange={e => this.handleChange(e)}
								/>
							</div>
							<input className="btn btn-custom"
								type="submit"
								value="SIGN UP"
							/>
						</form>
						{
							this.state.message ?
								<p style={{ color: "red" }}>{this.state.message}</p>
								:
								null
						}

						<small className="form-text text-dark">
							Já possui cadastro?
						<Link to={"/login"}> Clique aqui </Link>
						</small>
					</div>
					: null
				}
			</div>
		)

	}
}

export default Signup;
