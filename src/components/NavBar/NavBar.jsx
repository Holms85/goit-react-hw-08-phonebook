import { Link } from "react-router-dom"
import React from "react";
import styles from "./NavBar.module.css"
import NavBarAuth from "components/NavBarAuth/NavBarAuth"
import PhonelinkSetupTwoToneIcon from '@mui/icons-material/PhonelinkSetupTwoTone';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function NavBar() {
    return <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Phonebook <PhonelinkSetupTwoToneIcon/></Link>
          </Typography>
          <NavBarAuth/>
        </Toolbar>
      </AppBar>
    </Box>
}
        



        // <div className={styles.wrapper}>
        //     <Link to="/">Phonebook <PhonelinkSetupTwoToneIcon/></Link>
        //     <NavBarAuth/>
        // </div>
    
