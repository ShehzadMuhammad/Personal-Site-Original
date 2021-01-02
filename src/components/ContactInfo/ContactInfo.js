import React from 'react';
import './ContactInfo.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: 30,
    height: '100%',
    width: '100%'
  }
});

class ContactInfo extends React.Component {
  render() {
    const { classes } = this.props;

    return (
     <Grid container className={classes.root}>
       
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={600}>

          <Paper elevation={4} className={classes.paper}>

           <Grid container spacing={24} className="mypage">
            
             <Grid item xs={12} sm={12}>
               <Typography variant="display2" className='Heading' align='left'>
                 Contact Info
               </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="info">
                <p>Phone: (647) - 702 - 2978
                </p>
                <p>Email: shehzad.muhamamd@outlook.com 
                </p>
                <p>
                  LinkedIn: <a href="https://www.linkedin.com/in/shehzad-muhammad-55b125b8/">Shehzad Muhammad</a>
                </p>
              </div>
              </Grid>


               <Grid item xs={12} sm={6}>
                <p className="p2">
                  ***My preference is email or LinkedIn but please leave a message if you call.
                </p>
              </Grid>

            </Grid>
          </Paper>
        </Slide>
      </Grid>
    );
  }
}

ContactInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactInfo);