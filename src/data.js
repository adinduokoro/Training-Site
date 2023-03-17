import img1 from './images/first-shooter.jpg'
import img2 from './images/classes-training.png'
import img3 from './images/self-defense.jpg'
import img4 from './images/wear-renewal.jpg'
import img5 from './images/security-guard.jpg'
import img6 from './images/hql-cert.jpg'

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

export default { nav , service , classes }