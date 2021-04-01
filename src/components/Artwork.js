import React, {useState} from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Artwork = ({data}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {data.artObject.webImage &&
              <img className="modal-image" src={data.artObject.webImage.url}/>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
             Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="artwork-title">{data.artObject.title}</div>
        <div className="artwork-label">{data.artObject.scLabelLine}</div>
        <Row>
          <Col sm={6} md={5} lg={4}>
          {data.artObject.webImage ? 
            <img className="artwork-image" src={data.artObject.webImage.url} onClick={handleShow}/>
          : <div className="no-image"> No Image </div>}
            </Col>
          <Col sm={6} md={7} lg={8}>
            <div className="artwork-description">{data.artObject.plaqueDescriptionEnglish}</div>
            <span className="artwork-dimensions">Dimensions : {data.artObject.subTitle}</span>  
          </Col>
        </Row>
      </div>
    );
  };
  export default Artwork;