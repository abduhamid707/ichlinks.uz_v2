import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import NotFound from '../pages/not-found/NotFound'
import About from '../pages/about/About'
import News from '../pages/news/News'
import DocsPage from '../pages/docs-page/DocsPage'
import Contact from '../pages/contact/Contact'
import PhotoGallery from '../pages/photo-gallery/PhotoGallery'
import VideoGallery from '../pages/video-gallery/VideoGallery'
import AudioMaterials from '../pages/audio-materials/AudioMaterials'
import SearchPage from '../pages/search-page/SearchPage'
import Nmm from '../pages/nnm/Nmm'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/documents' element={<DocsPage />} />
        <Route path='/news' element={<News />} />
        <Route path='/nmm' element={<Nmm />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/photo-gallery' element={<PhotoGallery />} />
        <Route path='/video-gallery' element={<VideoGallery />} />
        <Route path='/audio-materials' element={<AudioMaterials />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  )
}

export default Router;
