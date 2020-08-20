import React from 'react';
import './Example.css';

class Example extends React.Component {


  render() {

    let example = this.props.example;
   
    return (

     
        <div className="section__exampleWrapper" >
          <div className="section__example" onClick={ (evt) => { this.props.onClick(evt, example) } }>
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