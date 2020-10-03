import React from "react"
import banner from "../images/banner.png"

function Hero() {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-md">
          <div className="banner">
            <img src={banner} alt="food" width="100%" height="100%" />
          </div>
        </div>
        <div className="col-md ">
          <div className="slogan">
            <div className="slogan-h1">
              <h1>Enjoy Our</h1>
              <h1>Delicious Meal</h1>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, dolor?
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
