import React, { Component } from 'react';
import './About.css';

class About extends Component {


   handleResume = () => {
      let resumeDownload = this.props.data.resumedownload;
      window.open(resumeDownload, "_blank")
    }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio2 = this.props.data.bio2;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="JBC Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p className="biotext">{bio}</p>
            <br></br>
            <p className="biotext">{bio2}</p>
            <br></br>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p>
                     <span className="biotext">{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a onClick={this.handleResume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
