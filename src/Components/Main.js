import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Main.css";
import Web3 from "web3";
import { BNB, SeekGoldAddress, tokenAbi } from "../config";
import {
  BuyFunction,
  initWeb3,
  SellFunction,
  setArrayAwait,
  WHDiv,
  WHReferral,
} from "../store/adoptSlice";
import { useParams } from "react-router";
import { Web3Modal } from "@web3modal/react";
import ResponsiveDialog from "./ResponsiveDialogue";
import DailyTimer from "./DailyTimer";
import axios from "axios";
const a1 = {
  display: "flex",
  boxShadow: "rgb(188, 159, 78) 0px 5px 15px",
  justifyContent: "center",
  flexDirection: "column",
  backdropFilter: "blur(6px)",
};
const a2 = {
  display: "flex",
  boxShadow: "rgb(188, 159, 78) 0px 5px 15px",
  justifyContent: "center",
  flexDirection: "column",
  backdropFilter: "blur(6px)",
};
const a3 = {
  background: "transparent",
  width: "100%",
  height: "50px",
  border: "1px solid white",
  color: "white",
  borderRadius: "10px",
};
const a4 = {
  display: "flex",
  boxShadow: "rgb(188, 159, 78) 0px 5px 15px",
  flexDirection: "column",
  backdropFilter: "blur(6px)",
};



export default function Main() {
  const { referrer } = useParams();
  const web3 = new Web3(Web3.givenProvider);
  // const BNBContract = new web3.eth.Contract(tokenAbi, BNB);
  // const [allowance, setAllowance] = useState();
  const [toggle, setToggle] = useState(false);
  const [BNBbalance, setBNBbalance] = useState(0);
  const [Puramount, setPurAmount] = useState();
  const dispatch = useDispatch();
  const [sellAmount, setSellAmount] = useState();
  const [amountExceeded, setAmountExceeded] = useState(false);
  const [textArea, setTextArea] = useState();
  const [success, setCopySuccess] = useState();
  const [BNBPrice, setBNBPRice] = useState(0);

  

  useEffect(() => {
    const abc = async () => {
      const addresses = await web3.eth.getAccounts();

      // const _all = await BNBContract.methods
      //   .allowance(addresses[0], SeekGoldAddress)
      //   .call();

      // setAllowance(web3.utils.fromWei(_all, "ether"));

      const _price = await axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD")

      setBNBPRice(_price.data.RAW.BNB.USD.PRICE)

      const _bal = await web3.eth.getBalance(addresses[0]);

      setBNBbalance(_bal);
    };

    abc();
  }, [toggle]);

  function numberWithCommas2(x) {
    var y = x.toFixed(2);
    return y
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      .slice(0, 20);
  }

  const balance = useSelector((state) => {
    return Number(state.adoptReducer.balance);
  });

  const monthlyDivWithdrawn = useSelector((state) => {
    return state.adoptReducer.monthlyDivWithdrawn;
  });

  // const address = useSelector((state)=>{
  //   return state.adoptReducer.address;
  // });

  const totalethStacked = useSelector((state) => {
    return Number(state.adoptReducer.ethStaked);
  });

  const error1 = useSelector((state) => {
    return state.adoptReducer.error;
  });

  const address = useSelector((state) => {
    return state.adoptReducer.address;
  });

  const rate = useSelector((state) => {
    return Number(state.adoptReducer.rate);
  });

  const dividendBalance = useSelector((state) => {
    return Number(state.adoptReducer.dividendBalance);
  });

  const referralBalance = useSelector((state) => {
    return Number(state.adoptReducer.ReferralBalance);
  });

  const _holderPersonalEth = useSelector((state) => {
    return Number(state.adoptReducer.holderPersonalEth);
  });

  const Referrer = useSelector((state) => {
    return state.adoptReducer.getReferrer;
  });
  const indirectReferrer = useSelector((state) => {
    return state.adoptReducer.indirect;
  });

  const _monthlyDividendBalance = useSelector((state) => {
    return Number(state.adoptReducer.monthlyDividendbalance);
  });

  const purchaseAwait = useSelector((state) => {
    return state.adoptReducer.PurAwait;
  });

  const monthlyCycle = useSelector((state) => {
    return state.adoptReducer._nextMonthly;
  });

  const arrayAwait = useSelector((state) => {
    return state.adoptReducer.arrayAwait;
  });

  const refArray = useSelector((state) => {
    return state.adoptReducer.directReferralArray;
  });
  const Salerate = useSelector((state) => {
    return Number(state.adoptReducer.saleRate);
  });

  const SeekGoldContract = useSelector((state) => {
    return state.adoptReducer.SeekGoldContract;
  });

  const dom =
    process.env.NODE_ENV == "development"
      ? window.location.host
      : window.location.hostname;

  console.log("first", BNBPrice);

  const Buy = async () => {
    var counter = 0;
    console.log("buy received");
    dispatch(setArrayAwait(true));
    // dispatch(BuyFunction({ referrer: referrer, value: Puramount }));
    setPurAmount("");

    var tempAdd =
      referrer === undefined
        ? "0x0000000000000000000000000000000000000000"
        :  referrer;

    console.log("referrer", referrer);
    console.log("tempadd", tempAdd);
    try {
      const result = await SeekGoldContract.methods
        .buy(tempAdd)
        .send({ from: address, gas: 3000000, value:web3.utils.toWei(Puramount, "ether")})
        .on("confirmation", (e, r) => {
          if (counter === 0) {
            setToggle(!toggle);

            dispatch(setArrayAwait(false));
            dispatch(initWeb3());
            console.log("buy fired");

            counter++;
          }
        });
      return result;
    } catch (error) {
      console.log("Error in BUy Function", error);
      return error;
    }
  };

  // const setValue = (e) => {
  //   e.preventDefault();
  //   dispatch(setArrayAwait(true));
  //   var counter = 0;
  //   try {
  //     BNBContract.methods
  //       .approve(
  //         SeekGoldAddress,
  //         web3.utils.toWei(Puramount.toString(), "ether")
  //       )
  //       .send({ from: address })
  //       .on("confirmation", (e, r) => {
  //         if (counter === 0) {
  //           setToggle(!toggle);
  //           dispatch(setArrayAwait(false));

  //           console.log("buy fired");
  //           Buy();
  //           counter++;
  //         }
  //       });
  //     console.log("approving");
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(setArrayAwait(false));
  //   }
  // };

  const setSellValue = async () => {
    //e.preventDefault();
    // dispatch(SellFunction({ value: sellAmount - 1 }));
    dispatch(setArrayAwait(true));
    setSellAmount("");
    var counter = 0;

    try {
      const result = await SeekGoldContract.methods
        .sell(sellAmount - 1)
        .send({ from: address, gas: 3000000 })
        .on("confirmation", (e, r) => {
          if (counter === 0) {
            setToggle(!toggle);

            dispatch(setArrayAwait(false));
            dispatch(initWeb3());

            counter++;
          }
        });
      return result;
    } catch (error) {
      console.log("Error in Sell Function", error);
      return error;
    }
  };

  function setChange(amount) {
    if (amount <= balance) {
      setSellAmount(amount);
    } else {
      setAmountExceeded(true);
    }
    console.log("excess", amountExceeded);
  }

  function showreferralFunction() {
    if (balance > 0) {
      return `https://${dom}/${address}`;
    }

    if (!purchaseAwait) {
      return null;
    }

    return `https://seekgold.club/${address}`;
  }

  const copyToClipboard = (e) => {
    textArea.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  };

  const withdrawDividend = async () => {
     dispatch(WHDiv({ value: dividendBalance }));
    // var counter = 0 
    // dispatch(setArrayAwait(true))
    //   try {
    //       // var amount = web3.utils.fromWei(dividendBalance.toString(),"ether")
    //       // console.log("value",amount)
    //       const result = await SeekGoldContract.methods.withdrawDividend(dividendBalance ).send({from : address})
    //       .on("confirmation", (e, r) => {
    //         if (counter === 0) {
    //           setToggle(!toggle);
  
    //           dispatch(setArrayAwait(false));
    //           dispatch(initWeb3());
  
    //           counter++;
    //         }
    //       });
    //       return result;
    //   } catch (error) {
    //       console.log("Error in withdraw Function",error)
    //   return error;
    //   }
  
  };

  const withdrawReferral = () => {


    dispatch(WHReferral({value: referralBalance}))

  };

  return (
    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-1juxp4k snipcss-XDjSy">
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8 MuiGrid-grid-md-6 css-pd102l snipcss0-3-7-8 snipcss-oPrtZ">
        <div className="MuiBox-root css-1l4w6pd snipcss-NWQGQ">
          <p className="MuiTypography-root MuiTypography-body1 css-17ky6kg">
            100K
          </p>
          <p className="MuiTypography-root MuiTypography-body1 css-1tsn8pu">
            Wallet
          </p>
        </div>

        <div
          className="MuiBox-root css-1vofbel snipcss0-4-8-9"
          filter="blur(52px)"
          style={a1}
        >
          <div className="MuiBox-root css-1bsk9eo snipcss0-5-9-10">
            100K Wallet is a global crowd funding and financial support
            ecosystem. The Immutable Smart Contract was developed to provide
            anyone across the globe a way to create a dependable, virtually no
            risk way to create passive income while retaining 100% control over
            their BNBs. We reward members who share the contract with others
            and the members who choose to simply collect dividends with no
            requirements whatsoever. We invite you to join us and start creating
            real time BNB Dividends TODAY!
          </div>
        </div>

        <div
          className="MuiBox-root css-1cwhqlp snipcss0-4-8-89"
          filter="blur(52px)"
          style={{
            display: "flex",
            boxShadow: "rgb(188, 159, 78) 0px 5px 15px",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          <div className="MuiBox-root css-1isq1vw snipcss0-5-89-90">
            <div className="MuiBox-root css-0 snipcss0-6-90-91">
              HOW TO START Earning
            </div>
          </div>
          <div className="MuiBox-root css-nyplhk snipcss0-5-89-92">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-t79cua snipcss0-6-92-93"
              style={{ background: "transparent" }}
            >
              <div
                className="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-1iji0d4 snipcss0-7-93-94"
                taxindex="0"
                role="button"
                aria-expanded="false"
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-17o5nyn snipcss0-8-94-95">
                  <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3 snipcss0-9-95-96">
                    <b className="snipcss0-10-96-97">1.</b>
                    Enter the amount of BNB you want to invest in deposit
                    section and click "BUY 100K Credits". You will be prompted
                    twice by you wallet. 1st for approving the BNBs and second
                    for actual purchase of 100K Credits
                  </p>
                </div>
              </div>
            </div>
            <br className="snipcss0-6-92-109" />
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-t79cua snipcss0-6-92-110"
              style={{ background: "transparent" }}
            >
              <div
                className="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-1iji0d4 snipcss0-7-110-111"
                taxindex="0"
                role="button"
                aria-expanded="false"
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-17o5nyn snipcss0-8-111-112">
                  <p className="MuiTypography-root MuiTypography-body1 css-9l3uo3 snipcss0-9-112-113">
                    <b className="snipcss0-10-113-114">2.</b>
                    Once the transaction is completed, you can find your
                    referral link in text box below. You can copy that link and
                    share with you friends and community to increase your
                    referral earnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="MuiBox-root css-1b7odk5 snipcss0-4-8-11"
          filter="blur(52px)"
          style={a2}
        >
          <div className="MuiBox-root css-ilzugl snipcss0-5-11-12">
            <div className="MuiBox-root css-q6p1ew snipcss0-6-12-13">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv snipcss0-7-13-14"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FoundationIcon"
              >
                <path d="M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"></path>
              </svg>
            </div>
            Financial&nbsp;Dashboard
          </div>
          <div className="MuiBox-root css-1meilsq snipcss0-5-11-15">
            <div className="MuiBox-root css-0 snipcss0-6-15-16">
              Total Client Capital
            </div>
            <div className="MuiBox-root css-0 snipcss0-6-15-17">
              {numberWithCommas2(Number(totalethStacked / 1000000000000000000))}{" "}
              BNB
            </div>
          </div>
          <div className="MuiBox-root css-1meilsq snipcss0-5-11-15">
            <div className="MuiBox-root css-0 snipcss0-6-15-16">
              Total Client Capital in USD
            </div>
            <div className="MuiBox-root css-0 snipcss0-6-15-17">
              {numberWithCommas2(Number(totalethStacked / 1000000000000000000)*BNBPrice)}{" "}
              USD
            </div>
          </div>
          <div className="MuiBox-root css-1meilsq snipcss0-5-11-18">
            <div className="MuiBox-root css-0 snipcss0-6-18-19">
              Your BNB Balance
            </div>
            <div className="MuiBox-root css-0 snipcss0-6-18-20">
              {BNBbalance &&
                numberWithCommas2(
                  Number(BNBbalance / 1000000000000000000)
                )}{" "}
              BNB
            </div>
          </div>
          <div className="MuiBox-root css-1meilsq snipcss0-5-11-21">
            <div className="MuiBox-root css-0 snipcss0-6-21-22">
              Your 100K Credits
            </div>
            <div className="MuiBox-root css-0 snipcss0-6-21-23">
              {numberWithCommas2(balance)}
            </div>
          </div>
          <div className="MuiBox-root css-1meilsq snipcss0-5-11-21">
            <div className="MuiBox-root css-0 snipcss0-6-21-22">
              Your 100K Credits Value
            </div>
            <div className="MuiBox-root css-0 snipcss0-6-21-23">
              {balance >1 ? (  numberWithCommas2((balance * Salerate) / 1000000000000000000)):0 } BNB
            </div>
          </div>

          <div className="MuiBox-root css-1meilsq snipcss0-5-11-21">
            <div className="MuiBox-root css-0 snipcss0-6-21-22">
              Your 100K Credits Value in USD
            </div>
            <div className="MuiBox-root css-0 snipcss0-6-21-23">
              {balance>1? (  numberWithCommas2((balance * Salerate * BNBPrice)  / 1000000000000000000)) : 0 } USD
            </div>
          </div>
          <div className="MuiBox-root css-ilzugl snipcss0-5-11-12">
            <div className="MuiBox-root css-q6p1ew snipcss0-6-12-13">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv snipcss0-7-13-14"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FoundationIcon"
              >
                <path d="M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"></path>
              </svg>
            </div>
            Buy Credits
          </div>
          <div
            className="MuiBox-root css-hrrklx snipcss0-5-11-24"
            style={{ cursor: "pointer" }}
          >
            <input
              onChange={({ target }) => {
                setPurAmount(target.value);
              }}
              value={Puramount}
              type="value"
              placeholder="Type BNB Amount"
              style={a3}
              className="snipcss0-6-24-25"
            />
          </div>
          <p style={{ marginLeft: "270px" }}>
            You will get{" "}
            {(((Puramount * 1000000000000000000) / rate) * 0.81).toFixed(0)}{" "}
            number of tokens
          </p>
          <p style={{ marginLeft: "310px" }}>
            Price BNB: {(rate / 1000000000000000000).toFixed(4)}
          </p>
          <button
            onClick={Buy}
            className="MuiBox-root css-nfu6v0 snipcss0-5-11-26"
            style={{ cursor: "pointer" }}
          >
            BUY 100K Credits
          </button>
          <p style={{ marginLeft: "310px" }}>Minimum purchase is 0.01 BNB</p>
          <p>
            Share Your Referral Link And Get Paid 3% From Your Referrals
            Purchase And 2% From Their Referrals Purchase.
          </p>
          <div style={{ display: "flex", alignContent: "center" }}>
            <div
              className="MuiBox-root css-hrrklx snipcss0-5-11-24"
              style={{ cursor: "pointer" }}
            >
              <input
                style={a3}
                className="snipcss0-6-24-25"
                ref={(textarea) => setTextArea(textarea)}
                value={showreferralFunction()}
              />
            </div>

            {
              /* Logical shortcut for only displaying the 
            button if the copy command exists */
              document.queryCommandSupported("copy") && (
                <div>
                  <button
                    className="MuiBox-root css-nfu6v0 snipcss0-5-11-26"
                    style={{
                      width: "150px",
                      marginTop: "15px",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                    onClick={copyToClipboard}
                  >
                    Copy
                  </button>
                  {success}
                </div>
              )
            }
          </div>

          <div className="MuiBox-root css-1meilsq snipcss0-5-11-21">
            <div className="MuiBox-root css-0 snipcss0-6-21-22">
              Total Number of Direct Referrals : {refArray && refArray.length}
            </div>
          </div>
          <br />
          <br />
          <div className="MuiBox-root css-ilzugl snipcss0-5-11-12">
            <div className="MuiBox-root css-q6p1ew snipcss0-6-12-13">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv snipcss0-7-13-14"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FoundationIcon"
              >
                <path d="M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"></path>
              </svg>
            </div>
            Sell Credits
          </div>
          <div
            className="MuiBox-root css-hrrklx snipcss0-5-11-24"
            style={{ cursor: "pointer" }}
          >
            <input
              value={sellAmount}
              type="value"
              onChange={(e) => {
                setChange(e.target.value);
              }}
              placeholder="Type 100K Credit amount"
              style={a3}
              className="snipcss0-6-24-25"
            />
          </div>
          <p style={{ marginLeft: "200px" }}>
            You will get{" "}
            <strong>
              {((Salerate / 1000000000000000000) * 0.91 * sellAmount).toFixed(
                4
              )}
            </strong>{" "}
            amount of BNBs based on current price
          </p>

          <p style={{ marginLeft: "310px" }}>
            Price BNB: {(Salerate / 1000000000000000000).toFixed(4)}
          </p>
          <button
            disabled={amountExceeded}
            onClick={setSellValue}
            className="MuiBox-root css-nfu6v0 snipcss0-5-11-26"
            style={{ cursor: "pointer" }}
          >
            Sell 100K Credits
          </button>
        </div>

        <div
          className="MuiBox-root css-ujahjq snipcss0-4-8-42"
          filter="blur(52px)"
          style={{
            display: "flex",
            boxShadow: "rgb(188, 159, 78) 0px 5px 15px",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            className="MuiBox-root css-0 snipcss0-5-42-43"
            style={{ width: "100%" }}
          >
            <div className="MuiBox-root css-1isq1vw snipcss0-6-43-44">
              {/* {refArray && refArray.map((v,e)=>
              {if(e<4){
                return( */}
              {/* <div  className="MuiBox-root css-0 snipcss0-7-44-45">
                  Directs Referrals NOs  : <span style={{marginLeft:"30px"}}>{refArray && refArray.length}</span>                </div> */}
              {/* )
              }
  
              }
 
              )} */}
            </div>
          </div>

          {/* <div
            className="MuiBox-root css-0 snipcss0-5-42-47"
            style={{ width: "100%" }}
          >
            <div className="MuiBox-root css-1isq1vw snipcss0-6-47-48">
              <div className="MuiBox-root css-q6p1ew snipcss0-7-48-49">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv snipcss0-8-49-50"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="PersonAddAlt1Icon"
                >
                  <path d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"></path>
                </svg>
              </div>
              <div className="MuiBox-root css-0 snipcss0-7-48-51">
                Indirect Referrals : {indirectReferrer}
              </div>
            </div>
          </div> */}

          <div className="MuiBox-root css-2bjh79 snipcss0-5-42-67">
            <div className="MuiBox-root css-0 snipcss0-6-67-68">
              Your Dividend Earnings Value :
            </div>

            <div className="MuiBox-root css-0 snipcss0-6-67-69">
              {(dividendBalance / 1000000000000000000).toFixed(4)} BNB
            </div>
            <button
              onClick={() => {
                withdrawDividend(dividendBalance);
              }}
              className="MuiBox-root css-nfu6v0 snipcss0-5-11-26"
              style={{
                width: "150px",
                margin: "0px",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Withdraw Dividend
            </button>
          </div>
          <div className="MuiBox-root css-2bjh79 snipcss0-5-42-70">
            <div className="MuiBox-root css-0 snipcss0-6-70-71">
              Your Referral Earnings Value:
            </div>

            <div className="MuiBox-root css-0 snipcss0-6-70-72">
              {(referralBalance / 1000000000000000000).toFixed(4)} BNB
            </div>
            <button
              onClick={() => {
                withdrawReferral(referralBalance);
              }}
              className="MuiBox-root css-nfu6v0 snipcss0-5-11-26"
              style={{
                width: "150px",
                margin: "0px",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Withdraw Referral
            </button>
          </div>
          {!monthlyDivWithdrawn ? (
            <div className="MuiBox-root css-2bjh79 snipcss0-5-42-70">
              <div className="MuiBox-root css-0 snipcss0-6-70-71">
                Your monthly Bonus value:
              </div>
              <div className="MuiBox-root css-0 snipcss0-6-70-72">
                {(_monthlyDividendBalance / 1000000000000000000).toFixed(4)}{" "}
                BNB
              </div>
              <DailyTimer start={monthlyCycle} />
            </div>
          ) : null}
        </div>
      </div>
      <ResponsiveDialog open={arrayAwait} />
    </div>
  );
}
