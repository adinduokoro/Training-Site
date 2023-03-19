import React from 'react'
import '../styles/Gallery.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
import { images } from '../data';


const Gallery = () => {

  return (
    <section className='gallery'>
      <div className="gallery__container">
        <h2 className='gallerytitle'>GALLERY</h2>
        <div className="gallery__box">
          <ImageGallery items={images} 
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery