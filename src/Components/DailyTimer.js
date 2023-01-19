import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux';
import { initWeb3 } from '../store/adoptSlice';
import "./Main.css"


export default function DailyTimer({start}) {

    const [seconds, setSeconds] = useState(60);
    const dispatch = useDispatch()
    const stakeTime = Number(start);
    var currentTimeinSeconds = new Date().getTime() / 1000
    var differenceTimeinSeconds = Math.trunc(stakeTime - currentTimeinSeconds)


    var DaysRemaining = Math.trunc((differenceTimeinSeconds /60 /60/24))
    var HoursRemaining = Math.trunc((differenceTimeinSeconds /60 /60)-(DaysRemaining*24))
    var MinutesRemaining = Math.trunc((differenceTimeinSeconds /60 )-(DaysRemaining*24*60)-(HoursRemaining*60))
    var SecondsRemaining = Math.trunc((differenceTimeinSeconds )-(DaysRemaining*24*60*60)-(HoursRemaining*60*60)-(MinutesRemaining*60))



    useEffect(() => {
        let interval = null;
        
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            if(differenceTimeinSeconds===0){
              dispatch(initWeb3())
            }
          }, 1000);

        


         return () => clearInterval(interval);
      }, [ seconds]);


//    console.log("date",differenceTimeinSeconds)
    return (

            <div
            className="MuiBox-root css-nfu6v0 snipcss0-5-11-26" style={{width:"150px",margin:"0px",paddingLeft:"5px",textAlign:"center",  fontSize:"15px"}}
            >
            {stakeTime != 0 ? <div>
            <span className="custom">{DaysRemaining} Days | </span>
            <span>{HoursRemaining} Hrs |     </span>
            <span>{MinutesRemaining} Min |     </span>
            <span>{SecondsRemaining} Sec |    </span>
            </div>:
            <span></span>
            }
        </div>

    )
}
