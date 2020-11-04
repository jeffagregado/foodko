import React from "react"

function Footer() {
  return (
    <footer className="section footer-sect">
      <div className="footer-container">
        <div className="row">
          <div className="col-sm-12 col-lg-3 foot-info">
            <h1>Foodko</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="col-lg"></div>
          <div className="col-sm-12 col-lg-6">
            <div className="row foot-links">
              <div className="col info">
                <p>Information</p>
                <ul>
                  <li>About us</li>
                  <li>More search</li>
                  <li>Testimonial</li>
                  <li>Event</li>
                </ul>
              </div>

              <div className="col help-links">
                <p>Helpful Links</p>
                <ul>
                  <li>Services</li>
                  <li>Support</li>
                  <li>Term & Condition</li>
                  <li>Privacy</li>
                </ul>
              </div>

              <div className="col our-menu">
                <p>Our Menu</p>
                <ul>
                  <li>Launch</li>
                  <li>Dinner</li>
                  <li>Catering</li>
                  <w></w>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col copyright">
          <p>Copyright 2020 Foodko All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
