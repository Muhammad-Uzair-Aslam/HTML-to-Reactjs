import React from "react";
import foodphotoImg from '../../assets/Imgs/Food Photo.png'
export default function Dishes(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
      <div className="card mx-auto border border-0 mx-2" style={{width: "16rem"}}>
        <img
          src={props.src}
          className="card-img-top img-fluid"
          alt="card"
        />
        <div className="card-body mx-0">
          <h6 className="card-title fw-bold">Greys Vage</h6>
          <button className=" button">{props.days} Days Remaining</button>
        </div>
      </div>
    </div>
  );
}
