import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Certs from '../Certs/Certs';
import './Home.css';

class Home extends Component {

  handleGithub = () => {
    let github = this.props.data.github;
    window.open(github, "_blank")
  }


  render() {

    if(this.props.data){
      console.log("data found")
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <ParticlesBg type="lines" bg={true} />
      
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social inline">
               <li><a><Certs className="button btn project-btn" data={this.props.data}></Certs></a></li>
               <li><a onClick={this.handleGithub} className="button btn github-btn"><i className="fa fa-github"></i>Github</a></li> 
            </ul>
         </div>
      </div>
   </header>
    );
  }
}

export default Home;
