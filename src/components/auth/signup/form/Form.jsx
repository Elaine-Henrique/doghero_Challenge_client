import React from 'react';
import '../../styles.css';


const Role = (props) => {
	return (
		<div>
			<div className="d-flex flex-wrap justify-content-center text-center role-custom">
				<div className={`hover-client ${props.state.classUser} ml-3 mr-3 mb-3`}>
					<div className="overlay-client d-flex justify-content-center">

						<button className={`p-3 text-uppercase info`} name='role' value='User' onClick={(event) => props.handleClass(event)}> Usuário </button >
					</div>
				</div>

				<div className={`hover-dogWalker ${props.state.classWalker} ml-3 mr-3 mb-3`}>
					<div className="overlay-dogWalker d-flex justify-content-center">
						<button className={`p-3 text-uppercase info`} name='role' value='DogWalker' onClick={(event) => props.handleForm(event)}> Dog Walker </button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Role;