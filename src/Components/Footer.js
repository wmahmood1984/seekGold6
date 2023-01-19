import React from 'react'

import logo from "../Images/100KCredit2.jpeg"
import {  useSelector } from 'react-redux';
export default function Footer() {
    const address = useSelector((state)=>{
        return state.adoptReducer.SeekGoldAddress;
      });
    return (
        <div style={{position:"absolute",left:"300px",display:"block",top:"2600px"}}>
            <div>
                <img style={{width:"200px"}} src={logo}></img>
            </div>
            <p>Contract address<a>{address}</a></p>
            <p>Copyright ©S100K Wallet 2022. All rights reserved.</p>
        </div>
    )
}