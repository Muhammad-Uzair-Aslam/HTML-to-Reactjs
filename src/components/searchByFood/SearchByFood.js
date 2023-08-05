import React from "react";

export default function SearchByFood(props) {
  return (
    <div className="col-lg-2 col-sm-6 col-md-4 mx-auto">
      <img src={props.src} alt="" className="img-fluid rounded-circle" />
      <div className="fw-bold h4 mt-3">{props.text}</div>
    </div>
  );
}
