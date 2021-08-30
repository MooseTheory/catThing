import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: 'left',
      flexGrow: 1,
    },
    menuButton: {},
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            A Cat Thing, meow
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
