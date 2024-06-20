import React from 'react'
import './style.css'

const NotFound = () => {
  return (
    <div className='page not-found-page'>
      <div className='container'>
        <div className='left'>
            <h1>404</h1>
            <div className='txts'>
                <h5>Странтца не найдена</h5>
                <p>Кажется, что-то пошло не так</p>
            </div>
        </div>
        <div className='right'>
            <ul className='links'>
                <li>Bosh sahifa</li>
                <li>Loyiha haqida</li>
                <li>NMM</li>
                <li>YANGILIKLAR</li>
                <li>NORMATIV XUJJATLAR</li>
                <li>MATERIAL</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default NotFound
