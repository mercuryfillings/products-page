import React from 'react'
import './Sort.css'

export default function Sort() {
  return (
    <div>
      <div className='sort-box'>
        <label>
          SORT BY:
        </label>
        <select className="sort">
          <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
          <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
          <option value="Price, Low-High">Price, Low-High</option>
          <option value="Price, High-Low">Price, High-Low</option>
        </select>
      </div>
    </div>
  )
}
