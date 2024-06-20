import React from 'react'
import './style.css'
import { FaPlay } from 'react-icons/fa';


const VideoCard = () => {
  return (
    <div className='vd_card'>
    <img src='https://picsum.photos/400/300'/>
    <div className='center'>
        <p>В Государственном художественном музее Узбекистана хранится более ста тысяч произведений.</p>
    </div>
    <div className='right'>
        <button><FaPlay/> Посмотреть</button>
    </div>
</div>
  )
}

export default VideoCard
