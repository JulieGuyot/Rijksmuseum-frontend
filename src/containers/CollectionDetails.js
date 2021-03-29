import React, { useState, useEffect } from "react";
import Artwork from '../components/Artwork';
import axios from "axios";
import { useParams } from "react-router-dom";

const CollectionDetails = () => {
  const { objectNumber } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://rijksmuseum-backend.herokuapp.com/collection/` + objectNumber
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Use Effect");
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading... </div>
  ) : (
    <div>
      <Artwork data={data}/>
    </div>
  );
};

export default CollectionDetails;
