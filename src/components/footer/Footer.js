import React from 'react'

export default function Footer() {
  return (
    <div className="container-fluid bg-dark">
                <div className="container ">
                    <div className="row px-5">
                        <div className="col-12 text-light mt-5 px-5">
                            <h3>Our Top Countries</h3>
                        </div>
                    </div>
                <div className="row ">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-2 col-sm-12 col-md-6 text-light mt-5">
                        
                        <ul style={{listStyleType: "none",marginLeft:"30px",fontSize:"20px"}}>
                            <li>Fransisco</li>
                            <li>Miami</li>
                            <li>San Diego</li>
                            <li>East bey</li>
                            <li>Long Beach</li>
                            
                        </ul>


                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6 text-light mt-5">
                        
                        <ul style={{listStyleType: "none",marginLeft:"30px",fontSize:"20px"}}>
                            <li>Fransisco</li>
                            <li>Washington</li>
                            <li>Portland</li>
                            <li>East bey</li>
                            <li>Long Beach</li>
                            
                        </ul>


                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6 text-light mt-5 mt-5">
                        
                        <ul  style={{listStyleType: "none",marginLeft:"30px",fontSize:"20px"}}>
                            <li>NewYork </li>
                            <li>Atlanta</li>
                            <li>Portland</li>
                            <li>Denver</li>
                            <li>Long Beach</li>
                            
                        </ul>


                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6 text-light mt-5">
                        
                        <ul  style={{listStyleType: "none",marginLeft:"30px",fontSize:"20px"}}>
                            <li>Chicago</li>
                            <li>Phoenix</li>
                            <li>Portland</li>
                            <li>East bey</li>
                            <li>Long Beach</li>
                            
                        </ul>


                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6 text-light mt-5 ">
                        
                        <ul  style={{listStyleType: "none",marginLeft:"30px",fontSize:"20px"}}>
                            <li>Columbus</li>
                            <li>Washington</li>
                            <li>Maxico</li>
                            <li>East bey</li>
                            <li>Long Beach</li>
                            
                        </ul>


                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <hr style={{color:"blanchedalmond"}}/>
                <div className="row text-light " style={{fontSize: "18px"}}>
                    <div className="col-lg-2 col-sm-12 col-md-4">
                        <h3>company</h3>
                        <p className="mt-4">
                            About Us <br/>Team <br/>Career <br/>Blog

                        </p>
                    </div>
                        <div className="col-lg-2 col-sm-12 col-md-4 text-light">
                            <h3>Contact</h3>
                            <p className="mt-4">
                                Help & Support <br/>Partner with us <br/>Ride with us 
    
                            </p>
                        </div>
                            <div className="col-lg-2 col-sm-12 col-md-4">
                                <h3>company</h3>
                                <p className="mt-4">
                                    About Us <br/>Team <br/>Career <br/>Blog
        
                                </p>

                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 col-sm-12" style={{fontSize: "18px"}}>
                        <span>Follow Us</span>
                        <div className="mt-3">
                            <img src="./assets/1.png" alt=""className="px-2"/>
                            <img src="./assets/2.png" alt="" className="px-2"/>
                            <img src="./assets/3.png" alt="" className="px-2"/>

                        </div>
                        <div className="mt-3">Recieve Exclusive Offers in your mailbox</div>
                        <div>
                            <input type="email" placeholder="Enter Your Email" className="mt-3"/>
                            <button className="btn btn-warning btn-lg">Subscribe</button>
                        </div>


                    </div>
                
            </div>
            <hr style={{color:"blanchedalmond"}}/>
            <div className="row">
                <div className="col-6 text-light">
                    All Right Reserved © Techloset, 2023
                </div>
                
                <div className="col-6  text-light  text-end">Made by  Muhammad Uzair Aslam</div>
            </div>
            </div>
            </div>
  )
}
