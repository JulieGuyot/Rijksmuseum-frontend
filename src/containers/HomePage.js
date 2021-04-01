import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import AboutMuseum from '../components/AboutMuseum';
import VisitMuseum from '../components/VisitMuseum';
import ContactUs from '../components/ContactUs';

import homePage from "../assets/home_page.jpeg";
import vanGogh from "../assets/van_gogh.jpeg";
import girlKimono from "../assets/girl_kimono.jpeg";
import swan from "../assets/swan.jpeg";
import VermeerSlide from "../assets/1280px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg";
import youngGirlSlide from "../assets/25555448841_0c6e0d9ae8_c copie.jpg";
import reader from "../assets/Vermeer,_Johannes_-_Woman_reading_a_letter_-_ca._1662-1663.jpg";
import girlInBlue from "../assets/girl_in_blue.jpeg";
import party from "../assets/fete_champetre.jpeg";

const HomePage = () => {

  return (
    <div>
      <div className="home-photo">
        <h1>Welcome to Rijksmuseum</h1>
        <img
          className="rijks-photo"
          src={homePage}
          alt="Home photo"
        />
      </div>
      <p className="text-presentation">Welcome to Rijksmuseum online collection! Here you can discover thousands of masterpieces from the famous Amsterdam museum. 
        You can add your favorite works to "My selection" to create your own collection. Enjoy your visit !
      </p>
      <div className="labels">
        <AboutMuseum  reader={reader} /> 
        <VisitMuseum girlInBlue={girlInBlue} />
        <ContactUs party={party}/>
      </div>        
      <div className="title-carousel">Dicover Masterpieces</div>
      <p className="text-carousel">What makes the Rijksmuseum one of the world’s most famous museums is the fame of the masterpieces in its collection. 
          Like The Milkmaid by Vermeer, Self-portrait by Van Gogh, The Merry Family by Jan Steen and Rembrandt’s Night Watch. 
          But so many other pieces in the collection could take you by surprise and capture your imagination. 
          Like Breitner’s Girl in a White Kimono and the Asian Pavilion. No matter how old you are, or where you’re from, you’ll discover something new at the Rijksmuseum.
      </p>
      <Link to={"/collection/"}> 
        <Button variant="dark" className="button-to-collection"> 
          <span className="button-text-to-collection">See the whole collection</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </Button>
      </Link>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="img-carousel"
            src={VermeerSlide}
            alt="Vermeer"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={vanGogh}
            alt="Van Gogh"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={youngGirlSlide}
            alt="Young Girl Slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={girlKimono}
            alt="Girl in Kimono"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-carousel"
            src={swan}
            alt="Swan"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  ) 
};

export default HomePage;
