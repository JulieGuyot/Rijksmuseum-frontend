import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import rijks from '../assets/14843471637_bff5f73cb7_c copie.jpg';

const AboutMuseum = ({reader}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>About Rijksmuseum</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="museum-photo" src={rijks} alt="museum photo"/>
            <p>The Rijksmuseum is the national museum of the Netherlands.</p>
            <p>
              On 19 November 1798 the government decided to establish a national museum on the French model. 
              Intended as a ‘prestige project’ to inspire patriotic feeling, it would also offer a place to store important objects. 
              This National Art Gallery first opened its doors on 31 May 1800 in Huis Ten Bosch in The Hague. 
              It brought together more than 200 paintings and historical objects from both the stadtholders’ collections and national institutions (some defunct) like the Dutch East India Company. 
              The first purchase – The Swan by Jan Asselijn – cost 100 guilders and is one of the Rijksmuseum’s top attractions to this day.
            </p>
            <h4>A ‘ROYAL MUSEUM’</h4>
            <p>
              In 1808 the Kingdom of Holland was under the rule of Louis Napoleon Bonaparte. He moved the national collections to the country’s new capital of Amsterdam.
              And not to just any building, but to the Royal Palace on Dam Square, originally the town hall. 
              There they joined the city’s most important paintings, including Rembrandt’s The Night Watch. 
              This Royal Museum officially opened in 1809 on the palace’s top floor.
            </p>
            <h4>A ‘NATIONAL MUSEUM’</h4>
            <p> 
              After King Willem I came to the throne in 1813, the museum and the national print collection from The Hague were both relocated to Trippenhuis, a 17th-century city palace situated on Kloveniersburgwal. 
              It was christened the ‘Rijks Museum’, or ‘national museum’. Soon, however, a number of the collections were removed to other locations – much to the director’s dismay. 
              Objects from Classical Antiquity went to a new Museum of Antiquities in Leiden and applied arts and crafts to a recently formed Cabinet of Rarities in The Hague. 
              In 1838 a separate museum was created in Paviljoen Welgelegen in Haarlem to house modern, 19th-century art. 
              By contrast with the Napoleonic period, the Rijks Museum during this time received few major works.
            </p>
            <h4>A NEW BUILDING</h4>
            <p>
              With grand art galleries going up all over Europe, the Netherlands deserved a proud national museum building of its own. Trippenhuis was unsuitable. That opened the way to build something new. 
              Pierre Cuypers was chosen to be the architect, and he designed the Rijksmuseum in a historicizing style, blending Gothic and Renaissance elements with a wealth of national symbolism. 
              After years of debate – the design was too medieval, too Catholic and not Dutch enough in the eyes of many – construction started in 1876. 
              In 1885 it officially opened. In addition to the existing collection, the Rijksmuseum came to house almost all of Amsterdam’s collection of older paintings, such as Rembrandt’s Jewish bride, bequeathed to the city by the banker A. van der Hoop.
              Works from Haarlem also returned, there was a dedicated space to house part of the Cabinet of Rarities, and the print collection got its own print room. It was a splendid building for a stately collection.
            </p>
            <h4>A SERIES OF RENOVATIONS</h4>
            <p>
              Over the years, the Rijksmuseum building underwent quite a few changes. 
              On the south-west end more galleries were added between 1904 and 1916, constituting what is now the Philips Wing. 
              In the 1950s and 60s, the two original courtyards were filled in to create more gallery space. 
              After 1945 the collections of National History and Sculpture and Applied Arts were moved to separate parts of the building. 
              Attempts to establish a new museum of Dutch history and make the Rijksmuseum a true art gallery came to nothing. 
              In the 1950s a new Asian Art department was formed with the arrival of the collection of the Association of Friends of Asian Art. 
              By the 1970s the museum was booming, attracting almost 1.5 million visitors a year. 
              But the building itself was increasingly unable to meet the needs of a modern museum. What could be done?
            </p>
            <h4>COMING FULL CIRCLE</h4>
            <p>
              During the most recent renovation (2003-2013), the museum was restored to Cuypers’ original architectural plan. 
              Though modernized, the interior is also closer to Cuypers’ building in all its grandeur. 
              Painting, applied arts and history are no longer displayed in separate parts of the building. 
              Instead, everything comes together to tell a single chronological story: the story of Dutch art and history from the Middle Ages up through the 20th century. 
              As soon as it reopened in 2013 the museum drew an unprecedented number of visitors – over 2 million – and thanks in part to many tourists it continued to do so until the coronavirus pandemic.
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
          src={reader}
          alt="Woman reading a letter"
        />
        <p>About museum</p>
        </div>
      </div>
    );
  };
  export default AboutMuseum;