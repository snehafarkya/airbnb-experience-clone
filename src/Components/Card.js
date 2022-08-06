import React from 'react'
// import kattie from "../images/kattie.png";
import star from "../images/Star.png"


export default function Card(props) {
    console.log(props);
  return (
    <div className="flexdiv">
    <div className='cardsection'>
        <div className="card">
            <div className="card-img">
                <img src={props.imgg}  className="cardimg" />
            </div>
            <div className="card-body">
                
                <img src={star} alt="" className='starimg'/><span>{props.cost}</span> 
                
            </div>
            <div className="card-text">
                <p>{props.namee} </p>
                <span>{props.person}</span>
            </div>
        </div>
        </div>
    </div>
  )
}
