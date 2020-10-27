import React from "react"
import banner2 from "../../images/banner2.png"
import Button from "../Button"

function SectionTwo() {
  return (
    <div className="hero">
      <div className="row">
        <div className="col-md">
          <div className="banner">
            <img src={banner2} alt="food" width="100%" height="100%" />
          </div>
        </div>
        <div className="col-md ">
          <div className="slogan">
            <div className="slogan-h1">
              <h1>Food is an Important Part of Balanced Diet</h1>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              tempora, a minus qui eveniet autem laboriosam doloremque alias
              quia expedita!
            </h2>
            <Button text="Explore our story" secondary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo
