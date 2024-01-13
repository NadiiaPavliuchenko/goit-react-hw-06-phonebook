import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from './ContactsForm.styled';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));

    e.target.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
      <label htmlFor="number">Number</label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactsForm;
