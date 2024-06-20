import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
import './style.css'

const SearchPage = () => {
  return (
    <div className='page search-page'>
       <div className='container'>
        <div className='top'>
        <MdOutlineCancel/>
        </div>
        <h3 className='title'>SAYT BO'YICHA IZLASH</h3>
        <div className='bottom'>
        <button className='search_btn'><FaSearch/></button>
            <input placeholder='Izlash matni'/>
            <button> Izlash</button>
        </div>
       </div>
    </div>
  )
}

export default SearchPage;
