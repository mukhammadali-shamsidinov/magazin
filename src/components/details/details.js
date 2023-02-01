import React from 'react'
import Sidebar from '../sidebar/sidebar'

const Details = ({details}) => {
console.log(details);
  return (
    <div className='container'>
        <Sidebar />
        <div className="row">
            <div className="col-12 col-sm-12  col-md-6">
            <figure>
                <img className='w-75' src={details.image} alt="img" />
            </figure>
            </div>
            <div className="col-12 col-sm-12  col-md-6">
            <div className="params">
                <h1>{details.title}</h1>
                <p>{details.description}</p>
                <button className='btn btn-outline-success'>Add to Basket <span>{details.price.toFixed(2)}💶</span></button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Details