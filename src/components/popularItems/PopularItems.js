import React from "react";
import aImg from '../../assets/Imgs/a.png'
export default function PopularItems(props) {
  return (
    <div class="col-lg-2 col-md-4 col-sm-12 mt-5">
      <div
        class="card border border-0 text-start mx-auto"
        style={{ width: " 12rem" }}
      >
        <img
          src={props.src}
          class="card-img-end img-fluid mt-4 rounded-4"
          alt="..."
        />
        <div class="card-body">
          <h6 class="card-title fw-bold">{props.name}</h6>
          <div class="card-text" style={{ color: "#FFB30E" }}>
            <img src={aImg} alt="" /> {props.desc}
          </div>
          <span>{props.rating}</span>
          <br />
          <button class=" round1">Order Now</button>
        </div>
      </div>
    </div>
  );
}
