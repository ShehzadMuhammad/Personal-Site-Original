import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
   typography: {
    padding: theme.spacing.unit * 2,
  }
});

class NavBar extends React.Component {

  render() {
     const { classes } = this.props;

    return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button color="inherit" component={Link} to="/Profile">Profile</Button>
          <Button color="inherit" component={Link} to="/Education and Skills">Education and Skills</Button>
          <Button color="inherit" component={Link} to="/Projects">Projects</Button>
        <Button color="inherit" component={Link} to="/Contact Info">Contact Info</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
 }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);