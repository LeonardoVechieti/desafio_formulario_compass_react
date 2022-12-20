import React from 'react'

const MyInput = (props) => {
  return (
    <div>
        <label className="label">{props.label}</label>
        <input type={props.type} placeholder={props.placeholder} className="input"/>
    </div>
  )
}

export default MyInput