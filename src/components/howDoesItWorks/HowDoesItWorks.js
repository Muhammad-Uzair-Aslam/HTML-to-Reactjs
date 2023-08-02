import React from 'react'

export default function HowDoesItWorks(props) {
  return (
    <div className="col-lg-3 col-sm-6 mt-3 text-center ">
                    <img src={props.src} className="margin"alt=""/>
                    <div className="fw-bold ">{props.heading}
                        <div className="fw-light">{props.desc}</div>
                    </div>
                </div>
  )
}
