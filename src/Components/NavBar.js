import React from 'react'
import "./NavBar.css"
import logo from "../Images/100KCredit2.jpeg"
import { useDispatch, useSelector } from 'react-redux';
import { initWeb3 } from '../store/adoptSlice';

export default function NavBar() {
    const dispatch = useDispatch()
    
    const address = useSelector((state)=>{
        return state.adoptReducer.address;
      });


  return (
    <div className="MuiBox-root css-1hp86dt snipcss-mnz7E" style={{outline: "rgb(255, 0, 0)", dashed :"1px"}}>
    <div className="MuiBox-root css-69i1ev">
     <div className="MuiBox-root css-0" style={{textDecoration: "none", cursor: "pointer", color: "rgb(0, 0, 0)", fontSize: "20px"}}>
       <img src={logo} width="200px" style={{position:"relative",top:"35px"}}alt="" />
     </div>
   </div>
     <div className="css-1t62lt9" >
    <button 
    onClick={()=>{dispatch(initWeb3())}}
    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-lc7qzq" tabIndex="0" type="button">
    {address? `${address.slice(0,5)}...${address.slice(-4)}`: "Connect Wallet"}
   <span className="MuiTouchRipple-root css-w0pj6f">
   </span>
 </button>
 </div>
   </div>
  )
}
