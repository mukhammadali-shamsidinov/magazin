import React from 'react'
import Sidebar from '../sidebar/sidebar'

const Details = () => {
  return (
    <div className='container'>
        <Sidebar />
        <div className="row">
            <div className="col-12 col-sm-12  col-md-6">
            <figure>
                <img className='w-75' src="https://m.media-amazon.com/images/I/61-PblYntsL.jpg" alt="" />
            </figure>
            </div>
            <div className="col-12 col-sm-12  col-md-6">
            <div className="params">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse tempora, quisquam obcaecati dolorum impedit aut nihil? Qui ad adipisci voluptatem sit quibusdam. Itaque numquam incidunt, pariatur alias recusandae magnam aut.</p>
                <button className='btn btn-outline-success'>Add to Basket</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Details