import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactList = () => {

	const defaultContact = new Contact("Ramiro","Somavilla","Probando123@gmail.com",true);

	return (
		<div>
			<h1>Contactos: </h1>
			<ContactComponent contact={defaultContact}></ContactComponent>			
		</div>
	);
}

export default ContactList;