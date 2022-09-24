import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from '../../../Redux/Auth/authSelectors';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from '../LoginPage/LoginPage.module.css';


export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return toast.error('Please fill in all fields!');
    }
    // dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        color="primary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={style.textField}
      />

      <TextField
        label="Password"
        variant="outlined"
        color="primary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={style.textField}
      />

      {!isLoading && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Log in
        </Button>
      )}

      {isLoading && <p>...Loading</p>}
    </form>
  );
};
