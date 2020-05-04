import React from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'

export default function ({ data }) {
  const { id } = useParams()
  const product = data.find(product => product._id === id)
  return (
    <div className='layout-children'>
      <div className="product-detail">
        <img className="detailimg" src={product.imgURL} />
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="price"> ${product.price}</div>
          <div className="description">{product.description}</div>
        </div>
      </div>
    </div>
  )
}
