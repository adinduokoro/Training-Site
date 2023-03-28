import img1 from './images/first-shooter.jpg'
import img2 from './images/classes-training.png'
import img3 from './images/self-defense.jpg'
import img4 from './images/wear-renewal.jpg'
import img5 from './images/security-guard.jpg'
import img6 from './images/hql-cert.jpg'

import galleryImages1 from '../src/images/GalleryImages/gallery-img1.png'
import galleryImages2 from '../src/images/GalleryImages/gallery-img2.jpg'
import galleryImages3 from '../src/images/GalleryImages/gallery-img3.jpg'
import galleryImages4 from '../src/images/GalleryImages/gallery-img4.jpg'
import galleryImages5 from '../src/images/GalleryImages/gallery-img5.jpg'
import galleryImages6 from '../src/images/GalleryImages/gallery-img6.jpg'
import galleryImages7 from '../src/images/GalleryImages/gallery-img7.jpg'
import galleryImages8 from '../src/images/GalleryImages/gallery-img8.jpg'
import galleryImages9 from '../src/images/GalleryImages/gallery-img9.png'


export const nav = [
  {
    text: "HOME",
    path: "#home"
  },
  {
    text: "ABOUT",
    path: "#about"
  },
  {
    text: "CLASSES",
    path: "#classes"
  },
  {
    text: "LOCATION",
    path: "#location"
  },
  {
    text: "CONTACT",
    path: "#contact"
  },
]

export const service = [
  {
    img: img1,
    text: "FIRST TIME SHOOTER"
  },
  {
    img: img2,
    text: "CLASSES & TRAINING"
  },
  {
    img: img3,
    text: "SELF DEFENSE TRAINING"
  },
  {
    img: img4,
    text: "INITIAL WEAR & CARRY/RENEWAL"
  },
  {
    img: img5,
    text: "SECURITY GUARD CLEARANCE"
  },
  {
    img: img6,
    text: "HANDGUN QUALIFICATION CERT. (HQL)"
  },
]

export const classes = [
  {
    title: "WEAR & CARRY",
    price: "$300.00",
  },
  {
    title: "HANDGUN QUALIFICATION LICENSE (HQL)",
    price: "$150.00",
  },
  {
    title: "HANDGUN RENEWAL",
    price: "$150.00",
  },
  {
    title: "FIRST TIME SHOOTER",
    price: "$100.00",
  },
  {
    title: "SECURITY GUARD CLEARANCE",
    price: "$200.00",
  },
  {
    title: "SELF DEFENSE TRAINING",
    price: "$100.00",
  },
]

export const images = [
  {
    original: galleryImages1,
    thumbnail: galleryImages1,
  },
  {
    original: galleryImages2,
    thumbnail: galleryImages2,
  },
  {
    original: galleryImages3,
    thumbnail: galleryImages3,
  },
  {
    original: galleryImages4,
    thumbnail: galleryImages4,
  },
  {
    original: galleryImages5,
    thumbnail: galleryImages5,
  },
  {
    original: galleryImages6,
    thumbnail: galleryImages6,
  },
  {
    original: galleryImages7,
    thumbnail: galleryImages7,
  },
  {
    original: galleryImages8,
    thumbnail: galleryImages8,
  },
  {
    original: galleryImages9,
    thumbnail: galleryImages9,
  },

  
];

export default { nav , service , classes ,images }