import React from "react"

function Card(props) {
  return (
    <div className={`mycard ${props.className}`}>
      <div className="card-img">
        <img src={props.src} alt={props.alt} />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default Card
