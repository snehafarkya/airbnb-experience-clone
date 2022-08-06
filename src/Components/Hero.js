import React from 'react'
import hero from "../images/collage.png"
import Navbar from "./Navbar";
import Card from './Card';
export default function Hero() {
  return ( 
<>
<Navbar />

    <div className='hero'> 


        <div className="container">
            <img src={hero} alt="" className='heroimg' />
        </div>
        <h1 className='title'>Online Experiences</h1>
        <p className='desc'>Join unique interactive activties led by 
            one-ao-the-kind hosts-all without leaving home
        </p> 

      

    </div>
    <div className="flexx">
    <Card
        imgg ="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        cost="4.5(6).USA"
        namee= "Life lessons with kattie Zaferes"
        person="From $136/ person"
        />
    <Card 
        imgg = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        cost="4.5(6).USA"
        namee= "Life lessons with kattie Zaferes"
        person="From $136/ person"
    />
    <Card 
        imgg ="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        cost="4.5(6).USA"
        namee= "Life lessons with kattie Zaferes"
        person="From $136/ person"
    />
    </div>
    </>
  )
}
