import React, {useState, useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Certs.css';

function Certs(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
      
      <div>
        <a className="button btn project-btn" onClick={handleShow}><i className="fa fa-book"></i>
          Certs
        </a>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>AWS Certs</Modal.Title>
          </Modal.Header>
        <Modal.Body>

          <ul className="certlist" id="certlist" >

                <li>       
                <a id="certlist" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=4&t=c&d=2019-07-31&ci=AWS00330518" target="_blank"> 
                <img src={props.data.sap} alt="Solutions Architect Professional" title="SAP: See Digital Badge"/>
                </a>
                </li>       
                <li>          
                <a id="certlist" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-09-29&ci=AWS00330518">
                <img src={props.data.saa} alt="Solutions Architect Associate" title="SAA: See Digital Badge"/>
                </a>
                </li>
                <li>    
                    <a id="certlist" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2017-10-27&ci=AWS00330518">
                    <img src={props.data.dva} alt="Developer Associate" title="DA: See Digital Badge"  />
                    </a>
                </li>
                <li>
                    <a id="certlist" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=3&t=c&d=2017-12-29&ci=AWS00330518">
                    <img src={props.data.csa} alt="System Operations Associate" title="SOA: See Digital Badge"/>
                    </a>
                </li>      

        </ul>
              
              
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button  variant="primary" size="lg" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        </div>
    
    );
   
  }

export default Certs;