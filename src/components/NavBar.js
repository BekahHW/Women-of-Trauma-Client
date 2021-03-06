import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,
    textAlign: "left",
    color: "white"
  },
  menuButton: {
    color: "white",
  },

};

const NavBar = (props) => {
    const { classes } = props;

    return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

        <Typography
         variant="h6" className={classes.grow}>
         <NavLink style={{color: 'white', textDecoration: 'none'}}
          to="/">
            Women of Trauma
            </NavLink>
          </Typography>

          <NavLink
            to="/narratives"><Button className={classes.menuButton} color="inherit">Read Stories</Button></NavLink>
          <NavLink
            to="/getHelp"><Button className={classes.menuButton} color="inherit">Get Help</Button></NavLink>
          <NavLink
            to="/disorders"><Button className={classes.menuButton} color="inherit">Learn More</Button></NavLink>

        </Toolbar>
      </AppBar>
    </div>
}



NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(NavBar);
