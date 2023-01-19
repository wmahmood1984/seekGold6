
import Web3 from 'web3'





const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Buy",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "seller",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Sell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithDividend",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithPersonalEth",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "WithdrawrReferral",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "AccountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "EthStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "ReferralBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SaleexistingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TotalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_DividendMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_IndexMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_ReferralCommission",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_existingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "_holderArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_holderBalances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_holderPaidOUt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_holderPersonalEth",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_referrerMapping",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "holder",
				"type": "address"
			}
		],
		"name": "dividendBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "existingPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "frDiv",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tamount",
				"type": "uint256"
			}
		],
		"name": "getSValues",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tamount",
				"type": "uint256"
			}
		],
		"name": "getTValues",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tTransferPUblic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tfeepublic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPriceInitial_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "valueforSale",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawDividend",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawPersonalEth",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawrReferral",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawrReferralAdmin",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]

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
				const SeekGoldAddress = "0x5aCF7E94E662ebEA4CE7F9934F627157872429EC"
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
                                                       }
            }else {console.log("error in loading web3")}
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
            console.log("Error in ArrayThunk",error)
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



             return getReferrer

        } catch (error) {
            console.log("Error in ArrayThunk",error)
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
			
             return dividendBalance

        } catch (error) {
            console.log("Error in dividendBalance",error)
        }
    }
    )




export const BuyFunction = createAsyncThunk("BuyFunction",
    async ({referrer,value})=>{
 
		var tempAdd = getreferrer2 != '0x0000000000000000000000000000000000000000'? getreferrer2 : referrer == address? '0x0000000000000000000000000000000000000000' : referrer;
		console.log("referrer",referrer)
		console.log("tempadd",tempAdd)
       try {
            const result = await SeekGoldContract.methods.buy(tempAdd).send({from : address, value: web3.utils.toWei(value,"ether"), gas: 3000000})
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
async ({value})=>{

    try {
        const result = await SeekGoldContract.methods.withdrawrReferral(referralBalance2).send({from : address})
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
async ({value})=>{
    try {
		var amount = web3.utils.fromWei(dividendBalance2.toString(),"ether")
        console.log("value",amount)
        const result = await SeekGoldContract.methods.withdrawDividend(dividendBalance2).send({from : address})
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


    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
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
			state.getReferrer = action.payload;
				},
		[ReferralBalance1.fulfilled] : (state,action)=>{
			state.ReferralBalance = action.payload;
				},
		[holderPersonalEth1.fulfilled] : (state,action)=>{
			state.holderPersonalEth = action.payload;
				},

		[divBalance.fulfilled] : (state,action)=>{
			state.dividendBalance = action.payload;

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
export const { toggle } = adoptSlice.actions
