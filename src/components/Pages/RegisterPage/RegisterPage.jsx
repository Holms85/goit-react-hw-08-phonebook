import React from 'react';

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getIsLoading, getError } from '../../../Redux/Auth/authSelectors';

import { signUp } from '../../../Redux/Auth/authOperation';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import { toast } from 'react-toastify';
import style from 'components/Pages/RegisterPage/RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const { status, message } = useSelector(getError);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('Please fill in all fields!');
    } else if (password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }
    dispatch(signUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <TextField
        label="Name"
        variant="outlined"
        color="primary"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className={style.textField}
        required
      />

      <TextField
        label="Email"
        variant="outlined"
        color="primary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={style.textField}
        required
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
        required
      />
      {!isLoading && (
        <Button variant="contained" color="primary" size="large" type="submit">
          Sign up
        </Button>
      )}
      {status && <p>{message}</p>}
      {isLoading && <p>...Loading</p>}
    </form>
  );
}
