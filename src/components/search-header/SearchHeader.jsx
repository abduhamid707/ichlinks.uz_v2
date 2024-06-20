import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './style.css'

const SearchHeader = () => {
  return (
    <div className='search-header'>
      <input className='search_input' placeholder='Search Product Here'/>
      <button>
         <FaSearch/>
      </button>
    </div>
  )
}

export default SearchHeader;