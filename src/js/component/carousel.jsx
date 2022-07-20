import React, {useContext, useEffect} from 'react'
import {Card} from './card.jsx'
import { Context } from '../store/appContext.js'

export const Carousel = (props) => {
  const {store, actions} = useContext(Context)
  useEffect(() => {
    
    if (props.routePath === "characters"){
      actions.loadCharacterData()
    } else if (props.routePath === "planets"){
      actions.loadPlanetData()
    } else {
      actions.loadVehicleData()
    }
  },[])
  let cardData = null
  if (props.routePath === "characters"){
    cardData = store.characterData
  } else if (props.routePath === "planets"){
    cardData = store.planetData
  } else {
    cardData = store.vehicleData
  }
  return (
    <div className="container carousel">
        <div className="row carousel">
          {cardData && cardData.results.map((result) => {
            return(
              <Card routePath={props.routePath} name={result.name} uid={result.uid} />
            )
          })}
        </div>
    </div>
  )
}

 