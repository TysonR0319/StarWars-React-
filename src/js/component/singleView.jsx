import React,{useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'

export const SingleView = (props) => {
  const [data, setData] = useState(null)
	let { id } = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/${props.category}/${id}/`, {
			method: 'GET'
		})
		.then(res => res.json())
		.then((data) => {setData(data.result.properties)})
		.catch(err => console.log(err))
	}, [])
  console.log(data)
  return (
    
    <div className="container">
      {(data) ? (
      <div className="row single-row">
        <div className="col-6 single-col">
          <h1 className='hi-bold'></h1>
        <img className="single-img"src="https://starwars-visualguide.com/assets/img/planets/2.jpg" className="card-img-top" alt="..."/>
        </div>
        <div className="col-2 single-col d-flex flex-column border border-warning justify-content-center">
          {Object.keys(data).map(key => {
            return <p className="sub-heading">{key}: {data[key]}</p>
          })}
        </div>
        <div className="col-4 single-col">
          <p className='h1-bold align-items-center'>Description</p>
            <p>"api Description"</p>
        </div>
      </div>): <h1>loading...</h1>}
    </div>
  )
}

