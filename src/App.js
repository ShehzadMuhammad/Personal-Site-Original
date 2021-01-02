import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import EducationSkills from './components/EducationSkills/EducationSkills';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Projects from './components/Projects/Projects';

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Profile} />
         <Route path="/Profile" component={Profile} />
        <Route path="/Education and Skills" component={EducationSkills} />
        <Route path="/Contact Info" component={ContactInfo} />
        <Route path="/Projects" component={Projects} />
      </div>
    );
  }
}

export default App;
