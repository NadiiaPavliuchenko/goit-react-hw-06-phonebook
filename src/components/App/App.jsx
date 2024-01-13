import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactsList />
    </>
  );
};
