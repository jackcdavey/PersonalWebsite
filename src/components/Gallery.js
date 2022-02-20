
import React, {Component} from 'react'
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

export default function PicGallery(){
  const IMAGES =
  [{
          src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
          src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
          thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212,
          caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},
  
  {
          src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
          thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
          thumbnailWidth: 320,
          thumbnailHeight: 212
  }]
  

  return(
    <div id="GallerySection" className="col-sm-12 container gallery-section">
      <div className="row">
          <h1 className="sectionHeader"> Gallery </h1>
      </div>
        <Gallery images={IMAGES}/>
    </div>
    );
}