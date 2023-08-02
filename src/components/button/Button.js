import React from 'react'
export default function Button(props) {
  return (
    <button className="btn btn-outline-warning btn-lg btn-sm m-2" style={{borderColor:props.bordercolor,color:props.color,fontWeight:props.fontweight}}><img src={props.Img} alt=""/> {props.title}</button>
  )
}
