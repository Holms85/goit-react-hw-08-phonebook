import React from 'react';
import style from 'components/Pages/HomePage/HomePage.module.css';
import SettingsPhoneTwoToneIcon from '@mui/icons-material/SettingsPhoneTwoTone';

export default function HomePage() {
  return (
    <div className={style.wrapper}>
      <h1>Welcome guest !</h1>
      <p className={style.text}>
        Here you can finally organize your contacts and store them safely!
      </p>
      <SettingsPhoneTwoToneIcon />
      <h2>Please, Sign up or Log in to start!</h2>
    </div>
  );
}
