import React from "react";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Cookies from "js-cookie";

const Favorites = () => {
  let cookies = Cookies.get("favori");
  let favorites = JSON.parse(cookies);
  console.log("cookies",cookies)
  return (
    <div>
      <div className="favorite-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
        <h2>My favorite masterpieces</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
      </div>
      <p className="favorite-text">Here you can store your 3 favorite masterpieces.</p>
      <Row>{favorites.map((element, index) => {
        return (
          <Col sm={6} md={4} lg={4} className="card">
            <Link to={"/collection/" + element.objectNumber}>
              <div className="favorite-title">{element.longTitle}</div>
              <img className="favorite-image" src={element.webImage.url}/>
            </Link>
          </Col>
        )
      })} 
      </Row>
    </div>
  ) 
};

export default Favorites;
