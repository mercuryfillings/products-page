import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Products.css'

function Products(props) {
  return (
    <div>
      <section className='products'>
        {props.data.filter(searchTerm => searchTerm.name.includes(props.search)).map(product =>
          <div key={product.name}>
            <Link className='product' to={'/product/' + product._id}>
              <img className='product-image' src={product.imgURL} />
              <div className="product-name">
                {product.name}
              </div>
              <div className="product-price">
                ${product.price}
              </div>
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

export default withRouter(Products)
