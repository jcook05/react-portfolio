import React, { Component } from 'react';
import './Examples.css';
import Example from './Example/Example';
import { Redirect } from 'react-router-dom';
import ParticlesBg  from "particles-bg";


class Examples extends Component {
  state = {
      selectedExample: this.props.data.work[0],
      selected: false
  }

selectWork = (evt, example) => {
    console.log("Clicked");
    console.log("example: " + example);
    this.setState({selectedExample: example,
    selected: true})
    }

  componentDidMount() {
      console.log("Loaded Examples")
      console.log(this.props)

  }
    render() {

      if(!this.state.selected) {
        return (

          <div id="portfolio">
            <h1>Work Examples</h1>
            <div className="row offset-3">
          
              <div className="twelve columns centered">
              
                  {this.props.data.work.map((example, idx) => {
                    return (
                      <Example example={example} key={idx} onClick={this.selectWork}/>
                  )
                      })}
            </div>
          </div>
         
        </div>

       
        
         
        ) }
      else {

        return (
          <Redirect push to={{
            pathname: '/examplework',
            state: { example: this.state.selectedExample }
        }}
        />
        )
      }
    };
}

export default Examples
 