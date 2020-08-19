import React from 'react';
import './Example.css';

class Example extends React.Component {


  render() {

    let example = this.props.example;
    let workimage = "images/IMG_0111.JPG"
   
    return (

     
        <div className="section__exampleWrapper" onClick={ (evt) => { this.props.onClick(evt, example) } }>
          <div className="section__example" >
            <img alt={example.image.desc}
              className="section__exampleImage"
              onClick={this.selectWork}
              />
            <dl className="color--cloud">
              <dt className="section__exampleTitle section__text--centered">
                {example.title}
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
      )

      
     
    
  }
}

export default Example 