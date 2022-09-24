import style from 'components/App.module.css';
// import ContactForm from 'components/ContactForm/ContactForm';
// import Filter from 'components/Filter/Filter';
// import ContactList from 'components/ContactList/ContactList';
import NavBar from './NavBar/NavBar';
import UserRoutes from 'Routes/Routes';

export default function App() {
  return (
    <div>
      <NavBar/>
      <UserRoutes/>
    </div>
  );
}
