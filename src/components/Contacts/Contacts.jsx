import React from 'react';
import {
  ContactList,
  Contactitem,
  DeleteButton,
  TitleContacts,
} from './Contacts.styled';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/contacts/contactsSlice';

const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const deleteContact = id => {
    dispatch(deleteUser(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <div>
      <TitleContacts>Contacts</TitleContacts>
      {children}
      <ContactList>
        {filteredContacts.map(contact => (
          <Contactitem key={contact.id}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <DeleteButton
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              <AiFillDelete />
            </DeleteButton>
          </Contactitem>
        ))}
      </ContactList>
    </div>
  );
};

export default Contacts;
