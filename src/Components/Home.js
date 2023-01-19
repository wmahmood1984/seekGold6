import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Home.css"

export default function Home() {

  const {referrer} = useParams()

  
  return (
    <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2 snipcss-7iAFb" >
  <div className="MuiBox-root css-1hhn1j2" >
    <div className="MuiBox-root css-nlzlwi">
      <p className="MuiTypography-root MuiTypography-body1 css-17ky6kg" >
        100K
      </p>
      <p className="MuiTypography-root MuiTypography-body1 css-1tsn8pu" >
        Wallet
      </p>
    </div>
    <p className="MuiTypography-root MuiTypography-body1 css-x3ndzq" >
      Real Time BUSD Dividends That Pay YOU Consistent Passive Income
    </p>
    <p className="MuiTypography-root MuiTypography-body1 css-6cbgiq" >
      Protected by the blockchain, 100k Wallet allows you 24 Hour Access To YOUR BUSD Anytime You wish!
    </p>
    <Link to={`/main/${referrer}`} className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1wrxqx1" tabindex="0" href="/seek-gold" >
      Enter Now
      <span className="MuiTouchRipple-root css-w0pj6f">
      </span>
    </Link>
  </div>
</div>

  )
}
