import style from 'components/App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import NavBar from './NavBar/NavBar';

export default function App() {
  return (
    <div>
      <NavBar/>
      <ContactForm />
      <h3 className={style.title}>Contacts</h3>
      <Filter />
      <ContactList />
    </div>
  );
}
