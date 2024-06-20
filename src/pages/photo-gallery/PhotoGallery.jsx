import React from 'react'
import './style.css'
import Links from '../../components/links/Links'
import { FaChevronLeft, FaChevronRight, FaHome } from 'react-icons/fa'

const PhotoGallery = () => {
    return (
        <div className='page photo-gallery-page'>
            <section className='section_one'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='left'>
                            <h2>FOTOGALEREYA</h2>
                        </div>
                        <div className='right'>
                            <Links />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section_two'>
                <div className='container'>
                    <h3 className='title'>Количество изображений:  &nbsp; &nbsp; 1 694</h3>

                    <div class="grid-wrapper">
                        <div>
                            <img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
                        </div>
                        <div class="tall">
                            <img src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="" />
                        </div>
                        <div class="wide">
                            <img src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                        </div>
                        <div>
                            <img src=" https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60" alt="" />
                        </div>
                        <div class="tall">
                            <img src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80" alt="" />
                        </div>
                        <div class="big">
                            <img src="https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=564&amp;q=80" alt="" />
                        </div>
                        <div class="wide">
                            <img src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                        </div>
                        <div class="big">
                            <img src="https://images.unsplash.com/photo-1572914857229-37bf6ee8101c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" alt="" />
                        </div>
                        <div class="tall">
                            <img src="https://images.unsplash.com/photo-1588453862014-cd1a9ad06a12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="" />
                        </div>

                        <div class="wide">
                            <img src="https://images.unsplash.com/photo-1588263823647-ce3546d42bfe?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1587897773780-fe72528d5081?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80" alt="" />
                        </div>
                        <div class="wide">
                            <img src="https://images.unsplash.com/photo-1588083949404-c4f1ed1323b3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1489&amp;q=80" alt="" />
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1587732608058-5ccfedd3ea63?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                        </div>
                    </div>
                    <div className='pagination_btns'>
                        <div className='left_btns'>
                            <button className='prev'>
                                <FaChevronLeft /> Пред. стр
                            </button>
                            <button className='next'>След. стр <FaChevronRight /> </button>
                        </div>
                        <div className='right_btns'>
                            <div className='left_page'>
                                <p>страница</p>
                                <button>3</button>
                                <p>из 157</p>
                            </div>
                            <button className='go_'>Перейти <FaChevronRight /></button>
                        </div>
                    </div>
                    <div className="back_navigate">
                        <button className="home"><FaHome /> Bosh sahifa</button>
                        <button className="next"> <FaChevronRight /> </button>
                        <button className="about">Fotogalereya</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PhotoGallery
  