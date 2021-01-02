import React from 'react';
import './Projects.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import Weather from './images/Weather.jpg';
import Chat from './images/chat.jpg';
import Zara1 from './images/zara1.jpg';
import Zara2 from './images/zara2.jpg';
import Zara3 from './images/zara3.jpg';
import Forum1 from './images/forum1.jpg';
import Forum2 from './images/forum2.jpg';
import Forum3 from './images/forum3.jpg';

const styles = theme => ({
  root: {
    flexgrow: 1
  },
  paper: {
    margin: 30,
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    width: '100%',
    flexgrow: 1
  }
});

class Projects extends React.Component {
  render() {
    const { classes } = this.props;

    return (

     <Grid container className={classes.root}>
       
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={600}>

          <Paper elevation={4} className={classes.paper}>
            <Grid container spacing={24} className="mypage">
             <Grid item xs={12} sm={12} align="center">
                   <Typography variant="display2" className='Heading' align='center'>
                     Projects
                   </Typography>
                  </Grid>

            
               <Grid item xs={12} sm={12}>
           		 <p className='SubHeading' align='center'>
                Weather Application
                </p>
                </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Weather } alt="weather" />
              </Grid>
               <Grid item xs={12} sm={6}>
                <strong>Why Did I Make It and What Did I Learn</strong>
                <p className="Content" align='left'>
                The first personal project I have done using React is a Weather App, I did it to understand how to query data from an API and display onto a website. I learned how to make calls from an API and use a form for querying the data. I used APIXU API because it is on a secure HTTPS instead of HTTP, i was able to query enough data for a 5 day forecast and i was happy with the result. Here is a link to the website to try yourself  < a href="https://weather-app-9a7fa.firebaseapp.com/"> Click Here! </a>
                 </p>
                 <p align='center'>
                   <a href="https://github.com/ShehzadMuhammad/myweather-app">GitHub Repo</a>
                  </p>
              </Grid>

              <Grid item xs={12} sm={12}>
               <p className='SubHeading' align='center'>
                Chat Application
                </p>
                </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Chat } alt="chat" />
              </Grid>
               <Grid item xs={12} sm={6}>
               <strong>Why Did I Make It and What Did I Learn</strong>
                <p className="Content" align='left'>
                Once I started to learn NodeJS I came across Socket.IO which very easily showed me how to make a chat application from there I tried to add my own things to it, like giving yourself a username and letting you know when a user has joined the chat. I’ve always wanted to make a chat application and see how it is made and Socket.IO is very handy for that.
              </p>
              <p align='center'>
               <a href="https://github.com/ShehzadMuhammad/Chat-Application">GitHub Repo</a>
               </p>
              </Grid>


               <Grid item xs={12} sm={12}>
               <p className='SubHeading' align='center'>
                Zara Mock Site
                </p>
                </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Zara1 } alt="zara1" />
              </Grid>
               <Grid item xs={12} sm={6}>
               <strong>Why Did I Make It</strong>
                <p className="Content" align='left'>
               I wanted to learn how to make a more impressive website than just a simple querying from an API, and I wanted to just improve my skills as a web developer. I decided to make a full stack MERN (Mongo, Express, React and NodeJs) application because I wanted to learn more server side code and I wanted this also added onto my familiarity with React. Being able to make a backend server with an API always interested me and being able to do so felt so satisfying. I am a big fan of Zara and if you ask most of my friends they'll tell you right away it's my favourite brand so I decided I would make a mock zara site with my own created API, in the site, you can view the items and add them to your shopping cart and check them out. I hosted the site on heroku so you can check it out < a href="https://evening-falls-65915.herokuapp.com/"> Click Here! </a>
              </p>
              <p align='center'>
               <a href="https://github.com/ShehzadMuhammad/Zara-Mock-Site">GitHub Repo</a>
               </p>
              </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Zara2 } alt="zara2" />
              </Grid>
               <Grid item xs={12} sm={6}>
               <strong>What did I Learn</strong>
                <p className="Content" align='left'>
                  For this project I learned how to use NodeJS and Express to build my own API using Mongo Atlas and so I was able to host the API on a server to access its data. I also discovered Postman which is this handle tool to make API calls without the need for the front end, it can do it right from its own application so I could test out GET, POST and DELETE requests. Then after that I learned how to connect the backend to React and access the data. I was introduced to Redux in this project for managing the states of my collected data. I learned how to make reducers and controllers and how to access them with axios, I also was able to create the shopping cart which is a local data, not data from the API.
              </p>
             </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Zara3 } alt="zara3" />
              </Grid>
               <Grid item xs={12} sm={6}>
               <strong>Final Thoughts</strong>
                <p className="Content" align='left'>
                  After finishing this project and hosting it, I was very proud to have this as the first real project that I can show off to people and demonstrate my skills in Web Development. This project also made me realise how much I enjoyed making web projects and how much I like to learn about it.
              </p>
             </Grid>

              <Grid item xs={12} sm={12}>
               <p className='SubHeading' align='center'>
                Forum Site
                </p>
                </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Forum1 } alt="forum1" />
              </Grid>
               <Grid item xs={12} sm={6}>
               <strong>Why Did I Make It</strong>
                <p className="Content" align='left'>
              I wanted to make the forum site because in the Zara Site I was able to use GET request to collect my data, but there wasn’t any POST or DELETE requests, so I made a forum site where you can ask a question and comment on other questions for me to learn how to make those requests and also I wanted to learn how to make User Authentication and Login because down the line I want to make another project that incorporates that.
              </p>
              <p align='center'>
               <a href="https://github.com/ShehzadMuhammad/Question-And-AnswerSite">GitHub Repo</a>
               </p>
              </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Forum2 } alt="forum2" />
              </Grid>
               <Grid item xs={12} sm={6}>
               <strong>What did I Learn</strong>
                <p className="Content" align='left'>
                  I learned how to do User authentication and login through a tutorial of course, and from there, having the functionality of adding and deleting posts was very similar to getting the data. I learned a little bit of conditional rendering so that you can only delete the posts or comments that your account had made. I had a bit of trouble with the individual requests for a specific question so I had to make the calls within the QuestionPage Component itself instead of within my controller which was unfortunate but it worked. I also learned a little of how to get data straight from the url so that, when u click on the specific post the postsID is in the url and the QuestionPage component grabs that ID and uses it to get the data, and you can posts comments as well.
              </p>
             </Grid>

              <Grid item xs={12} sm={6}>
                <img className={classes.image} src={ Forum3 } alt="forum3" />
              </Grid>
               <Grid item xs={12} sm={6}>
               <strong>Final Thoughts</strong>
                <p className="Content" align='left'>
                  Finishing this site made me happier than the Zara site because at three moments while making this project I was contemplating giving up or doing somethings a different way than how I originally wanted to do it but luckily I was able to find the solutions to each roadblock I had and I was able to create the site.
              </p>
             </Grid>
           </Grid>

          </Paper>
        </Slide>
      </Grid>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);