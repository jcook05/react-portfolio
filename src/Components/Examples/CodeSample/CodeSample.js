import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import data from '../../../data/code-sample-data';
import './CodeSample.css';


class CodeSample extends React.Component {

  

    componentDidMount() {
      window.scrollTo(0, 0)
    }



  render ()  {

      let items = ["No", "Code"];
      let sample = this.props.codesample

      if (data[sample]) { 
      items = data[sample]
      }

      console.log(items)

      const TColumn = (props) => <td> 
           <label>{ props.data.title }</label>
           <pre><code>
           { props.data.code }
           </code></pre>
          </td>

      return (

      
        <div className="CodeSample">

          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="primary" size='lg'eventKey="0">
                 Code Examples
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                
                <table>
                    <tbody>
                      <tr> 
                      { items.map(item =>
                      <TColumn data={item} key={item.title} /> )}
                      </tr>
                  </tbody>
                  </table>
                
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            
          </Accordion>
          </div>
      );
    }
}

export default CodeSample