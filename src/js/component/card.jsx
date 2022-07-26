import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

export const Card = (props) => {
  
  const [favorite, setFavorite] = useState([])
 
//   const addToFavorite = id => {
//     if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    
//   };
// console.log(favorite) Tried adding favorite feature






  return (
    <div className="col-3 card-container">
    <div className="card">
  <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloremque.</p>
    <div className="card-end">
      <Link to={`/${props.routePath || "characters"}/${props.uid}`}>
    <button className="btn btn-primary">Learn more about!</button>
    </Link>


    <button className="btn icon-btn border border-warning"><i className="bi bi-heart-fill"></i></button>
    </div>
  </div>
</div>
</div>
)
}