import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {
	return (
		<div>
			<h1>
				Nombre completo: {contact.name} {contact.surname}
			</h1>
			<h2>
				Email: {contact.email}
			</h2>
			<h4>
				Status: {contact.online ? 'Contacto en Línea' : 'Contacto No Disponible'}
			</h4>
			<button onClick={()=>{alert("Estamos trabajando en eso :D!!")}}>
				Change Status
			</button> {/*Pendiente por realizar*/}
		</div>
	);
};


ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
