import React from 'react';
import { Button, Jumbotron }  from 'react-bootstrap';
import './ExampleWork.css'
import CodeSample from '../CodeSample/CodeSample'


class ExampleWorkModal extends React.Component {

  
    state = {

        currentExample: ""

    }

    componentDidMount(props){
      //console.log(this.props)
      //console.log("example",this.props.location.state.example)
      this.setState({currentExample: this.props.location.state.example})
      
    };

    handleGithub = () => {
      let github = this.state.currentExample.github;
      window.open(github, "_blank")
    }

    render ()  {
        
        let example = this.state.currentExample;
        return (
          <div className="ExampleWork">
            <section>
              <h1>{example.title}</h1>
              <p>{example.desc}</p>
            </section>
            <section>
              <div className="floatcontainer">
                <h1>Git Hub Examples</h1>
                <br></br>
                  <p>
                    {example.gdesc}
                  </p>
                <br></br>  
                  <p>
                    <Button onClick={this.handleGithub} currentvariant="primary" size='lg'>Git Hub</Button>
                  </p>
              </div>
            </section>
            <section>
            <div className="floatcontainer">
                    <h1>Not interested in going to GitHub?  No problem!  See some code samples below.</h1>
                    <br></br>
                    <CodeSample codesample={example.codedata}></CodeSample>
                </div>
            </section> 
            </div>
        )
    };
};

export default ExampleWorkModal;