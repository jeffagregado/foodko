import React from "react"

function Button(props) {
  return (
    <>
      <button
        className={`btn ${props.secondary ? "btn-secondary" : ""} ${
          props.primary ? "btn-outline-primary" : ""
        } ${props.options ? "btn-options" : ""} ${
          props.isActive ? "btn-active" : ""
        } ${props.className} `}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  )
}

export default Button
