import React from 'react';
import './EducationSkills.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RyeU from './images/ryerson.png';
import ProjectI from './images/projectinclude.jpg';

import ReactIcon from './images/react.svg';
import JSIcon from './images/javascript.svg';
import JavaIcon from './images/java.svg';
import HtmlIcon from './images/html.svg';
import CssIcon from './images/css.svg';
import ExpressIcon from './images/express.svg';
import NodeIcon from './images/node.svg';
import PostmanIcon from './images/postman.svg';
import MongoIcon from './images/mongodb.svg';
import SqlIcon from './images/sql.png';
import WinIcon from './images/windows.svg';
import LinuxIcon from './images/linux.svg';
import GitIcon from './images/github.svg';
import CIcon from './images/c.svg';

const styles = theme => ({
  root: {
    flexgrow: 1
  },
  paper: {
    margin: 30,
    height: '100%',
    width: '100%'
  }
});

class EducationSkills extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
       
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={600}>

          <Paper elevation={4} className={classes.paper}>
            <Grid container spacing={24} className="mypage">
            
             <Grid item xs={12} sm={12}>
               <Typography variant="display2" className='Heading' align='left'>
                 Education
               </Typography>
              </Grid>
            <Grid item xs={12} sm={6}>
           		  <p className='SubHeading' align='left'>
                Ryerson University
                </p>
                <p className="Content" align='left'>
                Bachelor of Science (Honors) in Computer Science - September 2014 - October 2018
              </p>
              </Grid>

             <Grid item xs={12} sm={6}>
             <img className="RyeU" src={ RyeU } alt="ryeu" />
             </Grid>


             <Grid item xs={12} sm={12}>
               <Typography variant="display2" className='Heading' align='left'>
                 Skills
               </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <p className='SubHeading' align='left'>
              Languages and Technologies
              </p>             
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={ReactIcon} alt="reacticon"/>
                <p>React</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={JSIcon} alt="javascripticon" />
                <p>JavsScript</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={NodeIcon} alt="nodeicon" />
                <p>NodeJS</p>
              </Grid>

              <Grid item xs={12} sm={2}>
                <img className="MyIcon" src={ExpressIcon} alt="expressicon" />
                <p>Express</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={PostmanIcon} alt="postmanicon" />
                <p>Postman</p>
              </Grid>


              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={SqlIcon} alt="sqlicon" />
                <p>MySQL</p>
              </Grid>

              <Grid item xs={12} sm={2}>
                <img className="MyIcon" src={MongoIcon} alt="mongoicon" />
                <p>MongoDB</p>
              </Grid>

               <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={JavaIcon} alt="javaicon" />
                <p>Java</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={CIcon} alt="cicon" />
                <p>C</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={HtmlIcon} alt="htmlicon" />
                <p>HTML</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={CssIcon} alt="cssicon" />
                <p>CSS</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={GitIcon} alt="giticon" />
                <p>Git</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={WinIcon} alt="windowsicon" />
                <p>Windows</p>
              </Grid>

              <Grid item xs={4} sm={1}>
                <img className="MyIcon" src={LinuxIcon} alt="linuxicon" />
                <p>Linux</p>
              </Grid>

           
           
           
              <Grid item xs={12}>
               <Typography variant="display2" className='Heading' align='left'>
                 Experience
               </Typography>
             </Grid>

              <Grid item xs={12} sm={6}>
              <p className='SubHeading' align='left'>
              Coding Instructor - Project Include May 2018 - July 2018
              </p>
              <p className="Content" align='left'>
              I volunteered as a coding instructor for Project Include, which is a non profit organization that hosts coding camps throughout the Toronto area for children ages 9 - 12. Project Includes mission is to reach out to lower income families and introduce programming to children to get them interested.
                My duties included:
              </p>
                <ul>
                <li>Developed a 5 day curriculum, which was on introductory concepts of programming such as Conditional Statements and Loops using the Java language</li>
                <li>Teaching students in an engaging manner</li>
                <li>Provided a positive learning environment and assisted students when needed</li>
                </ul>
             
             </Grid>

             <Grid item xs={12} sm={6}>
             <img className="ProjectI" src={ ProjectI } alt="projectinclude" />
             </Grid>

            </Grid>
          </Paper>
        </Slide>
      </Grid>
    );
  }
}

EducationSkills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationSkills);