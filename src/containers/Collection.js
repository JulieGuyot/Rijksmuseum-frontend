import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CollectionCard from "../components/CollectionCard";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Collection = ({ favorites, setFavorites }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [sort, setSort] = useState("");
    const [searchArtist, setSearchArtist] = useState("");
    const [isFavorite, setisFavorite] = useState(false);

 
    const fetchData = async () => {
        const response = await axios.get(
          `https://rijksmuseum-backend.herokuapp.com/collection?&p=${page}&ps=${20}&s=${sort}&involvedMaker=${searchArtist}`);
        setData(response.data);
        setIsLoading(false);
      };
    
      useEffect(() => {
        fetchData();
      }, [page, sort, searchArtist, isFavorite]);

      const handlePageChange = ( pageNumber ) => {
        setPage(pageNumber);
     };

     const handleChange = (event) => {
       setSearchArtist(event.target.value);
     };
    
      return isLoading ? (
        <div className="loading">Loading... </div>
      ) : (
      <div>
        <h1>Collection</h1>
        <Row className="sort">
          <Col sm={6} md={4} lg={3}>
            <input
              placeholder="Search an artist"
              type="text"
              onChange={handleChange}
              className="mb-3">
            </input>
          </Col>
          <Col sm={6} md={8} lg={9}>
            <DropdownButton as={ButtonGroup} variant="secondary" title="Sort results" id="bg-vertical-dropdown-1">
              <Dropdown.Item eventKey="1" onClick={()=>setSort("chronologic")}>Sort results chronologically (oldest first)</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={()=>setSort("achronologic")}>Sort results chronologically (newest first).</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={()=>setSort("relevance")}>Sort results on relevance</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={()=>setSort("artist")}>Sort results on artist (a-z).</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={()=>setSort("artistdesc")}>Sort results on artist (z-a).</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={()=>setSort("")}>Cancel sorting</Dropdown.Item>
            </DropdownButton>
        </Col>
        </Row>
        <Row>
        {data.artObjects.map((element, index) => {
          console.log(element)
          if(element.id !== "en-SK-A-2815")
          return (
            <Col sm={4} md={4} lg={3} className="card">
              <CollectionCard element={element} favorites={favorites} setFavorites={setFavorites}/>
            </Col>
          )})
        }
        </Row>
        <div className="pagination">
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
        </div>
      </div>
      
  ) 
};

export default Collection;
