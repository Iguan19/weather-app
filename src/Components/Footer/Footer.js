import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
		bottom: 0,
		width: '100%',
		height: '3em',
  },
  title: {
    flexGrow: 1,
    textAlign: 'right',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant='dense'>
          <Typography variant="body2" className={classes.title}>
            Made By Iguan19
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
