import React, { useEffect, useState } from 'react'
import "./App.css"
import Main from './Components/Main'
import NavBar from './Components/NavBar'
import { Routes, Route} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { AccountBalance1, balance, divBalance, ethStaked1, getReferrer1, holderPersonalEth1, initialTokenPrice1, initWeb3, rate1, ReferralBalance1, saleRate1 } from './store/adoptSlice'
import axios from 'axios'
import Home from './Components/Home'
import HowItWorks from './Components/HowItWorks'
import HowToGetStarted from './Components/HowToGetStarted'
import Footer from './Components/Footer'

export default function App() {
  const [price, setPrice] = useState()

  const dispatch = useDispatch()

  const toggle = useSelector((state)=>{
    return state.adoptReducer.toggle;
  });

  const web3 = useSelector((state)=>{
    return state.adoptReducer.web3;
  });

  useEffect(() => {

//    dispatch(initWeb3())
    // dispatch(balance())
    // dispatch(ethStaked1())
    // dispatch(rate1())
    // dispatch(saleRate1())
    // dispatch(initialTokenPrice1())
    // dispatch(AccountBalance1())
    // dispatch(getReferrer1())
    // dispatch(ReferralBalance1())
    // dispatch(holderPersonalEth1())
    // dispatch(divBalance())


//    axios.get("https://api.pancakeswap.info/api/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
    axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD")
        //   // Handle a successful response from the server
           .then(response => {
        //           // Getting a data object from response that contains the necessary data from the server
                   const data = response.data;
                   setPrice(data.RAW.BNB.USD.PRICE)
        //           // Save the unique id that the server gives to our object
                  
           })
        //   // Catch and print errors if any
           .catch(error => console.error('On create student error', error));

//  setChainID(window.ethereum.networkVersion)

// if (window.ethereum?.networkVersion !== "56") {
//   try {
//     window.ethereum.request({
//       method: "wallet_switchEthereumChain",
//       params: [{ chainId: web3.utils.toHex("56") }],
//     });
//   } catch (err) {
//     // This error code indicates that the chain has not been added to MetaMask.
//     if (err.code === 4902) {
//       window.ethereum.request({
//         method: "wallet_addEthereumChain",
//         params: [
//           {
//             chainName: "BSC Mainnet",
//             chainId: web3.utils.toHex("56"),
//             nativeCurrency: { name: "BSC", decimals: 18, symbol: "BNB" },
//             rpcUrls: ["https://bsc-dataseed1.binance.org"],
//           },
//         ],
//       });
//     }
//   }
// }



  }, [toggle])

  return (
    <div className='backGround'>
      <NavBar></NavBar>
      
      <Routes >
        <Route path="/" element={<Main price={price}></Main>}></Route>
        <Route path="/:referrer" element={<Main price={price}></Main>}></Route>
        <Route path="main" element={<Main price={price} ></Main> }></Route>
        <Route path="main/:referrer" element={<Main  price={price} ></Main> }></Route>
        <Route path="HowItWorks" element={<HowItWorks />} ></Route>
        <Route path="HowToGetStarted" element={<HowToGetStarted />} ></Route>
      </Routes>

      <Footer></Footer>

    </div>
  )
}

