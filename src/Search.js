import React from 'react'
import './Search.css'

export default function Search(props) {
  function handleChange(e) {
    props.onChange(e.target.value)
  }

  return (
    <div>
      <form className="search-form">
        <input className="search" placeholder="Search" onChange={handleChange}></input>
      </form>
    </div>
  )
}
