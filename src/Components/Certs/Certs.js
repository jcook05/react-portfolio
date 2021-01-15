import React, { useState } from 'react';
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
                <a id="certlist" href="https://www.youracclaim.com/badges/676a4874-862d-48eb-9210-1777626b4a78/public_url" rel="noreferrer noopener" target="_blank"> 
                <img src={props.data.sap} alt="Solutions Architect Professional" title="SAP: See Digital Badge"/>
                </a>
                </li>       
                <li>          
                <a id="certlist" href="https://www.youracclaim.com/badges/07778724-8649-4cb6-b681-650a89d5b146/public_url" rel="noreferrer noopener" target="_blank">
                <img src={props.data.saa} alt="Solutions Architect Associate" title="SAA: See Digital Badge"/>
                </a>
                </li>
                <li>    
                    <a id="certlist" href="https://www.youracclaim.com/badges/64ff7cbe-240a-4757-bf7b-5e49415d0f99/public_url" rel="noreferrer noopener" target="_blank">
                    <img src={props.data.dva} alt="Developer Associate" title="DA: See Digital Badge"  />
                    </a>
                </li>
                <li>
                    <a id="certlist" href="https://www.youracclaim.com/badges/189c2525-7e9d-47d4-9938-85e8732b2cd8/public_url" rel="noreferrer noopener" target="_blank">
                    <img src={props.data.csa} alt="System Operations Associate" title="SOA: See Digital Badge"/>
                    </a>
                </li>      

        </ul>
              
              
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        </div>
    
    );
   
  }

export default Certs;