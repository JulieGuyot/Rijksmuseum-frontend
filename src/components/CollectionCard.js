import React, { useState } from "react";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";

const CollectionCard = ({element, favorites, setFavorites }) => {
  const [isFavorite, setisFavorite] = useState(false);
    return (
      <div>
        {element.hasImage === true && (
            <div>
                <div className="card-title">{element.title}</div>
                <Link to={"/collection/" + element.objectNumber}>
                <img className="card-image" src={element.webImage.url} width="200px"/>
                </Link>
                <div 
                classname="starIcon" 
                onClick={(event)=> {
                  const searchIndex = favorites.findIndex((fav) => {
                    console.log({fav})
                    return fav.id === element.id
                  });
                  let newFavorites = [...favorites];
                  if (searchIndex === -1) {
                    newFavorites.push(element);
                    setisFavorite(true)
                    alert("L'oeuvre a bien été ajoutée aux favoris");
                  } else {
                    newFavorites.splice(element, 1);
                    alert("L'oeuvre a déjà été ajoutée aux favoris");
                  }
                  Cookies.set("favori", JSON.stringify(newFavorites), { expires: 30 });
                  setFavorites(newFavorites);
                }}>
                {isFavorite === false ? 
                <span className="favorite-star-empty">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                  </svg>
                </span>
                : 
                <span className="favorite-star-fill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </span>
                }
              </div>
            </div>
        )}  
      </div>
    );
  };
  export default CollectionCard;
  