
import Web3 from 'web3'


import { abi, SeekGoldAddress } from '../config';










const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



var web3;
var SeekGoldContract
var address
export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkApi)=>{
    

        try {
            if(Web3.givenProvider){ 
                web3 = new Web3(Web3.givenProvider);
			
                await Web3.givenProvider.enable()
                const networkId = await web3.eth.net.getId()
//				const SeekGoldAddress = "0x5aCF7E94E662ebEA4CE7F9934F627157872429EC"

				var contract = new web3.eth.Contract(abi, SeekGoldAddress);
                
				SeekGoldContract = contract;
                const addresses = await web3.eth.getAccounts()
                address = addresses[0];
                thunkApi.dispatch(balance({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(divBalance({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(ethStaked1({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(rate1({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(saleRate1({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(AccountBalance1({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(AccountBalance1({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(getReferrer1({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(ReferralBalance1({
                    contract: SeekGoldContract,
                    address: address

                }))
				thunkApi.dispatch(holderPersonalEth1({
                    contract: SeekGoldContract,
                    address: address

                }))

				return {
                    web3,
                    contract,
                    address,
					SeekGoldAddress,
                    SeekGoldContract
                                                       }
            }else {console.log("error in loading web3")
				return {web3:null,contract:null,address:null,SeekGoldAddress:null}	}
        } catch (error) {
            console.log("Error", error)
        }

    }
)

var dividendBalance2
var holderPersonalEth2
var referralBalance2
var getreferrer2

export const balance = createAsyncThunk("balance",
    async ({contract,address})=>{

		
        try {
            const balance1 = await contract.methods._holderBalances(address).call()
			console.log("holder",balance1)
             return balance1

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )


export const ethStaked1 = createAsyncThunk("ethStaked1",
    async ({contract,address})=>{

		
        try {


            const ethStaked = await contract.methods.EthStaked().call()
             return ethStaked

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )
	
export const rate1 = createAsyncThunk("rate1",
    async ({contract,address})=>{

		
        try {


	        const rate = await contract.methods.existingPrice().call()
	        return rate

        } catch (error) {
            console.log("Error in rate1",error)
        }
    }
    )


export const saleRate1 = createAsyncThunk("saleRate1",
    async ({contract,address})=>{

		
        try {



			const saleRate = await contract.methods.SaleexistingPrice().call()
             return saleRate

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const initialTokenPrice1 = createAsyncThunk("initialTokenPrice1",
    async ({contract,address})=>{

		
        try {




            const initialTokenPrice = await contract.methods.tokenPriceInitial_().call()
             return initialTokenPrice

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )


export const AccountBalance1 = createAsyncThunk("AccountBalance1",
    async ({contract,address})=>{

		
        try {

			const AccountBalance = await contract.methods.AccountBalance().call()
             return AccountBalance

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const getReferrer1 = createAsyncThunk("getReferrer1",
    async ({contract,address})=>{

		
        try {
			const getReferrer = await contract.methods._referrerMapping(address).call()

     		getreferrer2 = getReferrer;
            const indirect = await contract.methods._referrerMapping(getReferrer).call()
            const refArray = await contract.methods.getRefarray(address).call()





             return {getReferrer,indirect,refArray}

        } catch (error) {
            console.log("Error in getReferrer",error)
        }
    }
    )

export const ReferralBalance1 = createAsyncThunk("ReferralBalance1",
    async ({contract,address})=>{

		
        try {

            const ReferralBalance = await contract.methods.ReferralBalance(address).call()
  			referralBalance2 = ReferralBalance




             return ReferralBalance

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )


export const holderPersonalEth1 = createAsyncThunk("holderPersonalEth1",
    async ({contract,address})=>{

		
        try {

            
            const holderPersonalEth = await contract.methods._holderPersonalEth(address).call()
			//dividendBalance2 = dividendBalance
			holderPersonalEth2 = holderPersonalEth
			



             return holderPersonalEth

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )

export const divBalance = createAsyncThunk("divBalance",
    async ({contract,address})=>{

		console.log("bal",contract.methods.dividendBalance(address))
        try {

			const dividendBalance = await contract.methods.dividendBalance(address).call()
			dividendBalance2 = dividendBalance

			const monthlyDividendbalance = await contract.methods._MonthDividendMapping(address).call()
			const _nextMonthly = await contract.methods.nextMonthly().call()
            const _monthlyDivWithdrawn = await contract.methods.MonthlyWithdrawMapping(address).call()
			
             return {dividendBalance,monthlyDividendbalance,_nextMonthly,_monthlyDivWithdrawn}

        } catch (error) {
            console.log("Error in dividendBalance",error)
        }
    }
    )




export const BuyFunction = createAsyncThunk("BuyFunction",
    async ({referrer,value})=>{
 
		var tempAdd = referrer === "undefined"? "0x0000000000000000000000000000000000000000" : getreferrer2 != '0x0000000000000000000000000000000000000000'? getreferrer2 : referrer == address || referrer == "undefined" ? '0x0000000000000000000000000000000000000000' : referrer;
	//	var tempAdd = tempAdd2 == undefined?"0x0000000000000000000000000000000000000000" : tempAdd2
        console.log("referrer",referrer)
		console.log("tempadd",tempAdd)
       try {
            const result = await SeekGoldContract.methods.buy(tempAdd,web3.utils.toWei(value,"ether")).send({from : address,  gas: 3000000})
            return result;
        } catch (error) {
            console.log("Error in BUy Function",error)
			return error;
        }
    }
    )

export const SellFunction = createAsyncThunk("SellFunction",
async ({value})=>{
    
    try {
        const result = await SeekGoldContract.methods.sell(value).send({from : address, gas: 3000000})
        return result;
    } catch (error) {
        console.log("Error in Sell Function",error)
		return error;
    }
}
)

export const WHPersonalEth = createAsyncThunk("WHPersonalEth",
async ({value})=>{
    console.log("per",value)
    try {
        const result = await SeekGoldContract.methods.withdrawPersonalEth(holderPersonalEth2).send({from : address, gas: 3000000})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
		return error;
    }
}
)


export const WHReferral = createAsyncThunk("WHReferral",
async ({value},thunkApi)=>{
    var counter = 0 
    try {
        const result = await SeekGoldContract.methods.withdrawrReferral(referralBalance2).send({from : address})
        .
        on("confirmation",(e,r)=>{
            if(counter===0){
                thunkApi.dispatch(initWeb3({}))
                counter++
            }
        })
        
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
		return error;
    }
}
)

export const reInvest = createAsyncThunk("reInvest",
async ()=>{

    try {
        const result = await SeekGoldContract.methods.reinvest().send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
		return error;
    }
}
)

export const WHDiv = createAsyncThunk("WHDiv",
async ({value},thunkApi)=>{
    var counter = 0;
    try {
		var amount = web3.utils.fromWei(dividendBalance2.toString(),"ether")
        console.log("value",amount)
        const result = await SeekGoldContract.methods.withdrawDividend(dividendBalance2).send({from : address}).
        on("confirmation",(e,r)=>{
            if(counter===0){
                thunkApi.dispatch(initWeb3({}))
                counter++
            }
        })

        
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
		return error;
    }
}
)
export const RedeemBNB = createAsyncThunk("RedeemBNB",
async ()=>{
    try {

        const result = await SeekGoldContract.methods.redeemBNBs().send({from : address})
        return result;
    } catch (error) {
        console.log("Error in withdraw Function",error)
		return error;
    }
}
)



const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
        SeekGoldContract:null,
        address : null,
        balance: null,
		saleRate:null,          
        arrayAwait : null,
        PurAwait : null,
        toggle: false,
        ethStaked: null,
        rate:null,
        initialTokenPrice:null,
        dividendBalance:null,
        ReferralBalance:null,
        holderPersonalEth:null,
		error: null,
		errorMessage: null,
		SeekGoldAddress: null,
		AccountBalance: null,
		monthlyDividendbalance:null,
		_nextMonthly: null,
        monthlyDivWithdrawn: null,
        indirect:null,
        directReferralArray:null


    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        },
        setArrayAwait:(state,actions)=>{
            state.arrayAwait = actions.payload
        }
    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.SeekGoldContract = action.payload.SeekGoldContract;
            state.address = action.payload.address;
			state.SeekGoldAddress = action.payload.SeekGoldAddress;


         },

         [balance.fulfilled] : (state,action)=>{
            state.balance = action.payload
            },
		
		[ethStaked1.fulfilled] : (state,action)=>{
			
			state.ethStaked = action.payload
			
				},

		[rate1.fulfilled] : (state,action)=>{
			state.rate = action.payload
				},

		[saleRate1.fulfilled] : (state,action)=>{
			state.saleRate = action.payload;
				},

		[initialTokenPrice1.fulfilled] : (state,action)=>{
			state.initialTokenPrice = action.payload;
				},

		[AccountBalance1.fulfilled] : (state,action)=>{
			state.AccountBalance = action.payload;
				},
		[getReferrer1.fulfilled] : (state,action)=>{
			state.getReferrer = action.payload.getReferrer;
          
            state.indirect = action.payload.indirect
            state.directReferralArray = action.payload.refArray
				},
		[ReferralBalance1.fulfilled] : (state,action)=>{
			state.ReferralBalance = action.payload;
				},
		[holderPersonalEth1.fulfilled] : (state,action)=>{
			state.holderPersonalEth = action.payload;
				},

		[divBalance.fulfilled] : (state,action)=>{
			state.dividendBalance = action.payload.dividendBalance;
			state.monthlyDividendbalance = action.payload.monthlyDividendbalance;
			state._nextMonthly = action.payload._nextMonthly
            state.monthlyDivWithdrawn = action.payload._monthlyDivWithdrawn

		},

       
        [BuyFunction.pending] : (state,action)=>{
			state.arrayAwait = true;
            state.PurAwait = false;
            state.toggle = !state.toggle;
			state.error = null;
        },
		// [BuyFunction.rejected] : (state,action)=>{
		// 	state.error = true;
		// 	state.errorMessage = action.payload;
        //     state.toggle = !state.toggle;
		// 	console.log("buy rejected",action.payload)
        // },
        [BuyFunction.fulfilled] : (state,action)=>{
			state.arrayAwait = false;
            state.PurAwait = true;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },

        [SellFunction.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
			state.error = null;
        },
		[SellFunction.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [SellFunction.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },

        [WHPersonalEth.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
			state.error = null;
        },
		[WHPersonalEth.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [WHPersonalEth.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },

        [WHReferral.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
			state.error = null;
        },
		[WHReferral.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [WHReferral.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },
        [WHDiv.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
			state.error = null;
        },
		[WHDiv.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [WHDiv.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },


		[reInvest.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
			state.error = null;
        },
		[reInvest.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [reInvest.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },


		[RedeemBNB.pending] : (state,action)=>{
            state.arrayAwait = true;
            state.toggle = !state.toggle;
			state.error = null;
        },
		[RedeemBNB.error] : (state,action)=>{
			state.error = true;
            state.toggle = !state.toggle;
        },
        [RedeemBNB.fulfilled] : (state,action)=>{
            state.arrayAwait = false;
            state.toggle = !state.toggle;
			state.error = action.payload.blockHash?  null:action.payload;

        },
       
//
    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle,setArrayAwait } = adoptSlice.actions
