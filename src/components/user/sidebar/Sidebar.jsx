import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Sidebar = ({ loggedInUser }) => {

	if (loggedInUser.role === 'DogWalker') {
		return (
			<div className="sidebar">
				<img className='profileImg' src={loggedInUser.image} alt='...' />
				<h2> Olá,{loggedInUser.name}</h2>
				<ul className="filterItem">
					<li>
						<Link
							to={{
								pathname: '/profile',
							}}
						>
							Perfil
						</Link>
					</li>
					<li>
						<Link
							to={{
								pathname: '/walks',
							}}
						>
							Passeios Disponíveis
						</Link>
					</li>
					<li>
						<Link
							to={{
								pathname: '/schedule',
							}}
						>
							Passeios Confirmados
						</Link>
					</li>
				</ul>
			</div>
		)
	} else {
		return (
			<div className="sidebar">
				<img className='profileImg' src={loggedInUser.image} alt='...' />
				<h2> Olá,{loggedInUser.name}</h2>
				<ul className="filterItem">
					<li>
						<Link
							to={{
								pathname: '/profile',
							}}
						>
							Perfil
						</Link>
					</li>
					<li>
						<Link
							to={{
								pathname: '/pets',
							}}
						>
							Meus Pets
						</Link>
					</li>
					<li>
						<Link
							to={{
								pathname: '/schedule',
							}}
						>
							Passeios Agendados
					</Link>
					</li>
					<li>
						<Link
							to={{
								pathname: '/favorite-walker',
							}}
						>
							Walkers Favoritos
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Sidebar;