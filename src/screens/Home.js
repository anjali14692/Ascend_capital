import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import task from './images/task.jpeg'


export default function Home() {

  const imageStyle ={
    objectfit : "contain",
    width: "100%",
    height : "auto",
  };

  return (
    <div>
    <div> <Navbar/> </div>
   <div style={{marginTop: '20px'}}>
    <img src={task} alt='' style={imageStyle}/>
   </div>
    <div> <Footer/> </div>

    </div>
  )
}
