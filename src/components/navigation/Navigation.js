import React, { useState, useContext } from 'react';
//import { Link } from 'react-router-dom';
import { NavLink, Link, withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Avatar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Hidden,
  withStyles
} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import NavigationContext from 'context/navigation/NavigationContext';

const useStyles = makeStyles((theme) => ({

}));

const Navigation = (props) => {
  const [open, setOpen] = useState(false);
  const { selectedNavbar } = useContext(NavigationContext);
  const classes = useStyles();

  const toggleSidebar = async _ => {
    setOpen(!open);
  }

  const showNavbar = (navbar) => {
    return navbar !== '' ? `- ${navbar}`: '';
  }

  return (
    <div>
      <AppBar position="static" color="transparent" style={{ border: '1px solid blue' }}>
        <Toolbar variant="dense">
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          {`Rick and Morty App ${showNavbar(selectedNavbar)}`}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
