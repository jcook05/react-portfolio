import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import data from './data/resumeData.json';
import sampledata from './data/data';
import Examples from './Components/Examples/Examples';
import ExampleWork from './Components/Examples/ExampleWork/ExampleWork';
import NavBar from './Components/NavBar/NavBar';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';

class App extends Component {

   state = {
     selectedExample: ""
   }

 selectWork = (example) => {

    this.setState({selectedExample: example});
    console.log(this.state.selectedExample);
    return (
    <Redirect to={{
        pathname: '/portfolio/examplework',
        state: { example: example }
    }}
    />
    )
 }


  componentDidMount(){
    console.log("mounted")
  }

  render() {
    return (
      <div className="App">
        <NavBar email={data.main.email}></NavBar>
        <BrowserRouter>
        <Route path="/" 
            exact 
            render={(props) => (<Home data={data.main} {...props} />)} />
        <Route 
            path="/aboutme" 
            exact 
            render={(props) => (<About data={data.main} {...props} />)} />
        <Route 
            path="/portfolio" 
            exact 
            render={(props) => (<Examples data={sampledata} selectWork={this.selectWork} {...props} />)} />
        <Route 
            path="/examplework"
            exact 
            render={(props) => (<ExampleWork {...props}/>)} /> 
      </BrowserRouter>
                
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
