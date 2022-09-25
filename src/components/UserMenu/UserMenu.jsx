import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'Redux/Auth/authSelectors';
import { logout } from 'Redux/Auth/authOperation';
import style from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);
  return (
    <div>
      <span className={style.name}>Welcome, {name}</span>
      <Button
        color="success"
        variant="contained"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </Button>
    </div>
  );
}
