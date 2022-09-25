import { NavLink } from 'react-router-dom';
import style from 'components/NavBarAuth/NavBarAuth.module.css';
export default function NavBarAuth() {
  return (
    <div>
      <NavLink to="/register" className={style.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={style.link}>
        Login
      </NavLink>
    </div>
  );
}
