import { useDispatch, useSelector } from 'react-redux';
import { Button, Li, Ul } from './ContactsList.styled';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const visibleContacts = getVisibleContacts(contacts, filter);
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Ul>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <Li key={contact.id}>
            {contact.name}: {contact.number}
            <Button type="button" onClick={() => handleClick(contact.id)}>
              Delete
            </Button>
          </Li>
        ))}
    </Ul>
  );
};

export default ContactsList;
