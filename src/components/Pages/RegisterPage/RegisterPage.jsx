import React from "react"

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import { toast } from 'react-toastify';
import style from 'components/Pages/RegisterPage/RegisterPage.module.css'


export default function RegisterPage() {
const dispatch = useDispatch();
//   const isLoading = useSelector(authSelectors.getLoading);
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
    // if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    //   return toast.error('💩 Please fill in all fields!');
    // } else if (password.length < 7) {
    //   return toast.info('Passwords must be at least 7 characters long!');
    // }
    // dispatch(authOperations.register({ name, email, password }));
    // setName('');
    // setEmail('');
    // setPassword('');
  };
    return <FormControl className={style.form}>
        <TextField
        label="Name"
        variant="outlined"
        color="secondary"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className={style.textField}
      />

      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={style.textField}
      />

      <TextField
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={style.textField}
        />
        {/* {!isLoading && (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Sign up
        </Button>
      )}

      {isLoading && <LoaderComponent />} */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Sign up
        </Button>
    </FormControl>
};
