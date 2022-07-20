import React from 'react'

export const SingleView = (props) => {

  
  return (
    <div className="container">
      <div className="row single-row">
        <div className="col-6 single-col">
          <h1 className='hi-bold'>{props.category}</h1>
        <img className="single-img"src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..."/>
        </div>
        <div className="col-2 single-col d-flex flex-column border border-warning justify-content-center">
          <p className='sub-heading'>Height:</p>
          <p className='sub-heading'>Weight:</p>
          <p className='sub-heading'>Skin color:</p>
          <p className='sub-heading'>Hair color:</p>
          <p className='sub-heading'>Eye color:</p>
          <p className='sub-heading'>Gender:</p>
        </div>
        <div className="col-4 single-col">
          <p className='h1-bold align-items-center'>Description</p>
            <p>"api Description"</p>
        </div>
      </div>
    </div>
  )
}

