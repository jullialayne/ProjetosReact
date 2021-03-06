import React from 'react'; 
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
  
} from '@mui/material'; 

import { makeStyles } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
     title:{
         flexGrow: 1,
         marginLeft: 10,
     }
}))

const Header = ( ) => {
    const classes = useStyles();

    return(
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
            My app
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Header;