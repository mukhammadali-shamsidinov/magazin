import React from 'react'
import CardDB from './card'


const Product = ({posts}) => {
  console.log(posts);
  return (
    <div className='container'>
        <div className="row">
       {posts.map(item=>(
        <CardDB id={item.id} {...item} />
       ))}
        </div>
    </div>
  )
}

export default Product