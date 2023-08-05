import React from 'react'

export default function Card(props) {
  return (
    <div className="card mb-3 border border-0 card-hori mb-3 mx-auto" style={{maxWidth: "1040px"}}>
                        <div className="row g-0">
                          <div className=" col-lg-4 col-md-12 ">
                            <div className="card-body mt-5">
                                <h2 className="card-title fw-bold"> {props.text1} <span style={{color:props.color}}>{props.text2}</span></h2>
                                <p className="card-text">{props.text}</p>
                                <div className="mt-lg-5 mt-sm-3">
                                <button className="btn  mt-lg-5 text-white view1 px-5 w-100 ">
                                    Proceed to Order 
                                </button>
                            </div>
                          </div>
                          
                        </div>
                        <div className=" col-lg-8 col-md-12 " >
                        <img src={props.src} alt="" className="img-fluid rounded-start " style={{marginRight:"30px"}} />
                            
                          </div>
                      </div>
                    </div>
  )
}
