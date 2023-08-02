import React from 'react'
import Button from '../button/Button'
import userImg from '../../assets/Imgs/user.png'
import maskGroupImg from '../../assets/Imgs/Mask Group.png'
import mapMarkerImg from '../../assets/Imgs/map-marker-alt.png'
import searchImg from '../../assets/Imgs/Search.png'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" row collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="col-lg-3 col-sm-12"><img src={maskGroupImg} alt=""/><span style= {{fontWeight:"bolder" , 
                color: "#F17228",fontSize:"22px" ,margin: "10px"}}>food</span>
                 <span style= {{fontWeight:"bolder" , color:"orange", fontSize:"18px"}} >WAGON</span></div>
            <div className="col-lg-6 col-sm-12"><span className="fw-bolder mt-4">Deliver to:</span>
                <img src={mapMarkerImg} className="p-2"alt=""/>
            Current location <span className="fw-bolder mt-4">MuhammadPur Bus stand</span></div>
            <div className="col-lg-3 col-sm-12"><img src={searchImg} className="pt-1" alt=""/> 
                <span style={{fontWeight:"bolder"}}>search food</span>
                <Button title="Login" Img={userImg}/>
            </div>
            
          </div>
        </div>
      </nav>
  )
}
