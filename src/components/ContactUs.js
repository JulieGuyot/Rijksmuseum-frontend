import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactUs = ({party}) => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Guided tour</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Daily</h4>
            <p>Private guided tour <br />
            For ages 16 and up</p>
            <h5>PRICE</h5>
            <p>€ 60 per tour</p>
            <li>max. 4 people</li>
            <li>excl. entrance ticket</li>
            <h5>WHEN</h5>
            <p>Daily</p>
            <li>10-11h</li>
            <li>13-14h</li>
            <p>Book your tour at leat 7 days in advance</p>
            <h5>DURATION</h5>
            <p>1 hour</p>
            <h5>WHERE</h5>
            <p>Starts at the Information Desk</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
             Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="one-label" onClick={handleShow}>
        <img
          src={party}
          alt="Party in the wood"
        />
        <p>Guided tour</p>
        </div>
      </div>
    );
  };
  export default ContactUs;