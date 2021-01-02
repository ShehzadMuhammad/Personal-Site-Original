import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MeInSuit from './images/suit.jpg';
import GitHub from './images/github.svg';
import LinkedIn from './images/linkedin.svg';
import Resume from './images/resume.svg';
import CompSciResume from './images/CompSciResume.pdf';


const styles = theme => ({
  root: {
    flexgrow: 1
  },
  paper: {
    margin: 30,
    height: '100%',
    width: '100%'
  },
   button: {
    margin: theme.spacing.unit,
  }
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
     <Grid container className={classes.root}>
       
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={600}>

          <Paper elevation={4} className={classes.paper}>
            <Grid container spacing={24} className="mypage">
            
             <Grid item xs={12} sm={12} align="center">
                   <Typography variant="display2" className='Heading' align='center'>
                     Shehzad Muhammad
                   </Typography>
                  </Grid>

            
               <Grid item xs={12} sm={6}>
                   <img className="Suit" src={ MeInSuit } alt="suit" />
                </Grid>

              <Grid item xs={12} sm={6}>
                <p className="info"> 
                Computer Science graduate with a passion for Front-End Web Development as well as Software Development. I pride myself in my Communication skills and being able to work well with others. I enjoy learning new concepts and increasing my knowledge of Computer Programming. 
                </p>
              <ul id="mylinks">
              <li>
                <Button variant="fab" color="inherit" href="https://www.linkedin.com/in/shehzad-muhammad-55b125b8/" className={classes.button}><img src={LinkedIn} alt="linkedin" /></Button>
                </li>
                <li>
                <Button variant="fab" color="inherit" href="https://github.com/ShehzadMuhammad" className={classes.button}><img src={GitHub} alt="github" /></Button>
                </li>
                <li>
                <Button variant="fab" color="inherit" className={classes.button} href={CompSciResume}><img src={Resume} alt="resume"  /></Button>
                </li>
                </ul>
              </Grid>

            </Grid>
          </Paper>
        </Slide>
      </Grid>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);