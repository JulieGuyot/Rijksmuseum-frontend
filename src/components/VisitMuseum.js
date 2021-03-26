import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

const VisitMuseum = ({girlInBlue}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Visit Museum</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Alert variant="danger">
            Coronavirus : The museum is temporarily closed until 30 March.
            Starting 31 March it is open again every day from 9h to 17h, including national holidays.
          </Alert>
          <h4>SHOP, CAFÉ AND GARDENS</h4>
          <p>The shop is open daily from 9 to 18h and you can find it in the atrium. 
            Unfortunately the Café is closed at the moment.
            The green gardens around the museum are only open during summer. <br />
            Opening hours are from 9 to 18h.
          </p>
          <h4>ADMISSION PRICES</h4>
          <p>Adults: €20  <br />
          Free for ages 18 and under  <br />
          Free for Friends of the Rijksmuseum  <br />
          Free for holders of Amsterdam City Card I, ICOM, Vereniging Rembrandt, KOG, VVAK, BankGiro Loterij VIP-KAART <br />
          Half-price for CJP and EYCA members: €10
          </p>
          <h4>START TIME AND TICKETS</h4>
          <p>All visitors are required to book a start time. <br />
          This applies to everyone, including Friends of the museum or with a Museum Card.
          The start time indicates the start of your visit.
          Once inside you can stay as long as you want during opening hours.
          </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
             Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="one-label" onClick={handleShow}>
        <img
          src={girlInBlue}
          alt="Girl in Blue dress"
        />
        <p>Visit museum</p>
        </div>
      </div>
    );
  };
  export default VisitMuseum;