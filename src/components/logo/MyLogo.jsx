import React from 'react'
import './MyLogo.css'

const MyLogo = (props) => {
   
  return (  
    
    <div >
        <img src={require(`../../assets/${props.image}.png`)} alt="logo" className="logo"/>
    </div>
  )
}

export default MyLogo