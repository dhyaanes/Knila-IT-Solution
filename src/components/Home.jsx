import React, { useState } from 'react';
import './home.css'

function Home() {
  const initialContact = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  };

  const [contact, setContact] = useState(initialContact);
  const [contacts, setContacts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const addContact = () => {
    if (!contact.firstName || !contact.lastName) return;
    if (editIndex === -1) {
      setContacts([...contacts, contact]);
    } else {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = contact;
      setContacts(updatedContacts);
      setEditIndex(-1);
    }
    setContact(initialContact);
  };

  const editContact = (index) => {
    setContact(contacts[index]);
    setEditIndex(index);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div>
      <h1>Contact Manager</h1>
      <div className="contact-form">
        <input type="text" name="firstName" placeholder="First Name" value={contact.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text" name="lastName" placeholder="Last Name" value={contact.lastName}
          onChange={handleInputChange}
        />
        <input type="email" name="email" placeholder="Email" value={contact.email}
          onChange={handleInputChange}
        />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" value={contact.phoneNumber}
          onChange={handleInputChange}
        />
        <input type="text" name="address" placeholder="Address" value={contact.address}
          onChange={handleInputChange}
        />
        <input type="text" name="city" placeholder="City" value={contact.city}
          onChange={handleInputChange}
        />
        <input type="text" name="state" placeholder="State" value={contact.state}
          onChange={handleInputChange}
        />
        <input type="text" name="country" placeholder="Country" value={contact.country}
          onChange={handleInputChange}
        />
        <input type="text" name="postalCode" placeholder="Postal Code" value={contact.postalCode}
          onChange={handleInputChange}
        />
        <button onClick={addContact}>
          {editIndex === -1 ? 'Add Contact' : 'Update Contact'}
        </button>
        {editIndex !== -1 && (
          <button onClick={() => setEditIndex(-1)}>Cancel</button>
        )}
      </div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((c, index) => (
          <li key={index}>
            <strong>Name:</strong> {c.firstName} {c.lastName}<br />
            <strong>Email:</strong> {c.email}<br />
            <strong>Phone:</strong> {c.phoneNumber}<br />
            <strong>Address:</strong> {c.address}, {c.city}, {c.state}, {c.country} {c.postalCode}<br />
            <button onClick={() => editContact(index)}>Edit</button>
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    <div class="footer">
        &copy; 2023 React Developer Assessment
    </div>
    </div>
  );
}

export default Home;
