import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import data from './data/resumeData.json';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import NavBar from './Components/NavBar/NavBar';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };
  }


  componentDidMount(){
    console.log("mounted")
  }

  render() {
    return (
      <div className="App">
        <NavBar>email={'hireme@efficientit.io'}</NavBar>

        <Route path="/" 
            exact 
            render={(props) => (<Home data={data.main} {...props} />)} />
        <Route 
            path="/aboutme" 
            exact 
            render={(props) => (<About data={data.main} {...props} />)} />
                
        {/* <Header data={this.state.resumeData.main}/> */}
        {/* <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/> */}
      </div>
    );
  }
}

export default App;
