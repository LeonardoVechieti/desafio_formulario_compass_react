import React from 'react'
import MyInput from '../input/MyInput'
import MyLogo from '../logo/MyLogo'
import './MyCard.css'

const MyCard = () => {

  return (
    <div className="card">
        <MyLogo image="logo"/>
        <h1>Intern Sign In</h1>
        <div className="card-content">
            <MyInput type="text" placeholder="Name" label="Full name*"/>
            <MyInput type="email" placeholder="foo@bar.com" label="Email*"/>
            <MyInput type="text" placeholder="(83 00000-0000)" label="Phone"/>
            <MyInput type="password" placeholder="" label="Password"/>
            <MyInput type="data" placeholder="dd/mm/aaaa" label="Birthday*"/>
            <div className="checkbox">
                <input type="checkbox" id="checkbox" label="I accept the terms and privacy"/>
            </div>
            <button className="btn">Register</button>
        </div>
    </div>
    
  )
}

export default MyCard