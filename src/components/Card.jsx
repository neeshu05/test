import React from 'react'
import '../static/css/card.css'
function Card({ image, title, price, description}) {
  return (
    <div className='container'>
        <img src= {image} alt="Product Image" className = "product_image" />
        <div className="card-content">
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <p className="price">Rs. {price}</p>
        </div>
    </div>
  )
}

export default Card