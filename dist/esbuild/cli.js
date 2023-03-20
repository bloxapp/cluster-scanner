#!/usr/bin/env node
"use strict";(()=>{var k=Object.create;var v=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var d=(n=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(n,{get:(e,t)=>(typeof require!="undefined"?require:e)[t]}):n)(function(n){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+n+'" is not supported')});var N=(n,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of M(e))!F.call(n,i)&&i!==t&&v(n,i,{get:()=>e[i],enumerable:!(a=O(e,i))||a.enumerable});return n};var T=(n,e,t)=>(t=n!=null?k(S(n)):{},N(e||!n||!n.__esModule?v(t,"default",{value:n,enumerable:!0}):t,n));var y=(n,e,t)=>new Promise((a,i)=>{var o=s=>{try{p(t.next(s))}catch(r){i(r)}},l=s=>{try{p(t.throw(s))}catch(r){i(r)}},p=s=>s.done?a(s.value):Promise.resolve(s.value).then(o,l);p((t=t.apply(n,e)).next())});var I=T(d("figlet"));var b={name:"cluster-scanner",version:"0.1.3",description:"Library to retrieve cluster snapshots from the ssv.network contract.",author:"SSV.Network",repository:"https://github.com/bloxapp/cluster-scanner",license:"MIT",keywords:["ssv","ssv.network","cluster","scanner"],main:"./dist/tsc/src/main.js",types:"./dist/tsc/src/main.d.ts",bin:{"ssv-keys":"./dist/tsc/src/cli.js"},engines:{node:">=12"},scripts:{"dev:cli":"ts-node src/cli.ts",cli:"node ./dist/tsc/src/cli.js",lint:"eslint src/ --ext .js,.jsx,.ts,.tsx",clean:"rm -rf dist build package","ts-node":"ts-node",build:"tsc -p tsconfig.json","build-all":"yarn clean && yarn build && yarn esbuild",esbuild:"node ./esbuild.js","pre-commit":"yarn test && yarn lint && yarn build-all"},devDependencies:{"@types/argparse":"^2.0.10","@types/cli-progress":"^3.11.0","@types/node":"^15.14.9",esbuild:"^0.14.38","esbuild-node-externals":"^1.4.1",eslint:"^7.32.0","ts-node":"^10.9.1",typescript:"^4.6.4"},dependencies:{"@types/figlet":"^1.5.4",argparse:"^2.0.1","cli-progress":"^3.11.2",figlet:"^1.5.2",web3:"^1.8.1"},licenses:[{MIT:"SEE LICENSE IN LICENCE FILE"}]};var g=d("argparse");var f=T(d("cli-progress"));var x=T(d("web3"));var h=[{inputs:[],name:"ApprovalNotWithinTimeframe",type:"error"},{inputs:[],name:"CallerNotOwner",type:"error"},{inputs:[],name:"CallerNotWhitelisted",type:"error"},{inputs:[],name:"ClusterAlreadyEnabled",type:"error"},{inputs:[],name:"ClusterDoesNotExists",type:"error"},{inputs:[],name:"ClusterIsLiquidated",type:"error"},{inputs:[],name:"ClusterNotLiquidatable",type:"error"},{inputs:[],name:"ExceedValidatorLimit",type:"error"},{inputs:[],name:"FeeExceedsIncreaseLimit",type:"error"},{inputs:[],name:"FeeIncreaseNotAllowed",type:"error"},{inputs:[],name:"FeeTooLow",type:"error"},{inputs:[],name:"IncorrectClusterState",type:"error"},{inputs:[],name:"InsufficientBalance",type:"error"},{inputs:[],name:"InvalidOperatorIdsLength",type:"error"},{inputs:[],name:"InvalidPublicKeyLength",type:"error"},{inputs:[],name:"NewBlockPeriodIsBelowMinimum",type:"error"},{inputs:[],name:"NoFeeDelcared",type:"error"},{inputs:[],name:"OperatorDoesNotExist",type:"error"},{inputs:[],name:"SameFeeChangeNotAllowed",type:"error"},{inputs:[],name:"TokenTransferFailed",type:"error"},{inputs:[],name:"UnsortedOperatorsList",type:"error"},{inputs:[],name:"ValidatorAlreadyExists",type:"error"},{inputs:[],name:"ValidatorDoesNotExist",type:"error"},{inputs:[],name:"ValidatorOwnedByOtherAddress",type:"error"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beacon",type:"address"}],name:"BeaconUpgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterDeposited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterLiquidated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterReactivated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ClusterWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"DeclareOperatorFeePeriodUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"ExecuteOperatorFeePeriodUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"address",name:"recipientAddress",type:"address"}],name:"FeeRecipientAddressUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"version",type:"uint8"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"LiquidationThresholdPeriodUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"MinimumLiquidationCollateralUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"value",type:"uint256"},{indexed:!1,internalType:"address",name:"recipient",type:"address"}],name:"NetworkEarningsWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"oldFee",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newFee",type:"uint256"}],name:"NetworkFeeUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"bytes",name:"publicKey",type:"bytes"},{indexed:!1,internalType:"uint256",name:"fee",type:"uint256"}],name:"OperatorAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"}],name:"OperatorFeeCancellationDeclared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"uint256",name:"blockNumber",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fee",type:"uint256"}],name:"OperatorFeeDeclared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"uint256",name:"blockNumber",type:"uint256"},{indexed:!1,internalType:"uint256",name:"fee",type:"uint256"}],name:"OperatorFeeExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"value",type:"uint64"}],name:"OperatorFeeIncreaseLimitUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"}],name:"OperatorRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"address",name:"whitelisted",type:"address"}],name:"OperatorWhitelistUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint64",name:"operatorId",type:"uint64"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"OperatorWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"bytes",name:"publicKey",type:"bytes"},{indexed:!1,internalType:"bytes",name:"shares",type:"bytes"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ValidatorAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{indexed:!1,internalType:"bytes",name:"publicKey",type:"bytes"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],indexed:!1,internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"ValidatorRemoved",type:"event"},{inputs:[],name:"acceptOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"cancelDeclaredOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"clusters",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"dao",outputs:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"balance",type:"uint64"},{internalType:"uint64",name:"block",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"uint256",name:"fee",type:"uint256"}],name:"declareOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"declareOperatorFeePeriod",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"deposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"executeOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"executeOperatorFeePeriod",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"initialVersion_",type:"string"},{internalType:"contract IERC20",name:"token_",type:"address"},{internalType:"uint64",name:"operatorMaxFeeIncrease_",type:"uint64"},{internalType:"uint64",name:"declareOperatorFeePeriod_",type:"uint64"},{internalType:"uint64",name:"executeOperatorFeePeriod_",type:"uint64"},{internalType:"uint64",name:"minimumBlocksBeforeLiquidation_",type:"uint64"},{internalType:"uint256",name:"minimumLiquidationCollateral_",type:"uint256"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"liquidate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"minimumBlocksBeforeLiquidation",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[],name:"minimumLiquidationCollateral",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[],name:"network",outputs:[{internalType:"uint64",name:"networkFee",type:"uint64"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"networkFeeIndexBlockNumber",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"",type:"uint64"}],name:"operatorFeeChangeRequests",outputs:[{internalType:"uint64",name:"fee",type:"uint64"},{internalType:"uint64",name:"approvalBeginTime",type:"uint64"},{internalType:"uint64",name:"approvalEndTime",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[],name:"operatorMaxFeeIncrease",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"",type:"uint64"}],name:"operators",outputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint64",name:"fee",type:"uint64"},{internalType:"uint32",name:"validatorCount",type:"uint32"},{components:[{internalType:"uint64",name:"block",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint64",name:"balance",type:"uint64"}],internalType:"struct ISSVNetworkCore.Snapshot",name:"snapshot",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64",name:"",type:"uint64"}],name:"operatorsWhitelist",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pendingOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"proxiableUUID",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"reactivate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"uint256",name:"fee",type:"uint256"}],name:"reduceOperatorFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"publicKey",type:"bytes"},{internalType:"uint256",name:"fee",type:"uint256"}],name:"registerOperator",outputs:[{internalType:"uint64",name:"id",type:"uint64"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"publicKey",type:"bytes"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"bytes",name:"shares",type:"bytes"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"registerValidator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"removeOperator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes",name:"publicKey",type:"bytes"},{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"removeValidator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipientAddress",type:"address"}],name:"setFeeRecipientAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"address",name:"whitelisted",type:"address"}],name:"setOperatorWhitelist",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"newDeclareOperatorFeePeriod",type:"uint64"}],name:"updateDeclareOperatorFeePeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"newExecuteOperatorFeePeriod",type:"uint64"}],name:"updateExecuteOperatorFeePeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"blocks",type:"uint64"}],name:"updateLiquidationThresholdPeriod",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"updateMinimumLiquidationCollateral",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"updateNetworkFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"newOperatorMaxFeeIncrease",type:"uint64"}],name:"updateOperatorFeeIncreaseLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"validatorPKs",outputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"bool",name:"active",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"validatorsPerOperatorLimit",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"version",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint64[]",name:"operatorIds",type:"uint64[]"},{internalType:"uint256",name:"amount",type:"uint256"},{components:[{internalType:"uint32",name:"validatorCount",type:"uint32"},{internalType:"uint64",name:"networkFeeIndex",type:"uint64"},{internalType:"uint64",name:"index",type:"uint64"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"bool",name:"active",type:"bool"}],internalType:"struct ISSVNetworkCore.Cluster",name:"cluster",type:"tuple"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawNetworkEarnings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawOperatorEarnings",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"operatorId",type:"uint64"}],name:"withdrawOperatorEarnings",outputs:[],stateMutability:"nonpayable",type:"function"}];var m=class{static web3(e=""){return new x.default(e)}static get abi(){return h}static contract(e,t){return new(m.web3(e)).eth.Contract(m.abi,t)}},u=m;u.BLOCK_RANGE_500K=5e5;var c=class{constructor(e){this.DAY=5400;this.WEEK=this.DAY*7;this.MONTH=this.DAY*30;this.eventsList=["ClusterDeposited","ClusterWithdrawn","ValidatorRemoved","ValidatorAdded","ClusterLiquidated","ClusterReactivated"];if(!e.contractAddress)throw Error("Contract address is required");if(!e.nodeUrl)throw Error("ETH1 node is required");if(!(Array.isArray(e.operatorIds)&&this.isValidOperatorIds(e.operatorIds.length)))throw Error("Comma-separated list of operator IDs. The amount must be 3f+1 compatible.");if(!e.ownerAddress)throw Error("Cluster owner address is required");if(e.contractAddress.length!==42)throw Error("Invalid contract address length.");if(!e.contractAddress.startsWith("0x"))throw Error("Invalid contract address.");if(e.ownerAddress.length!==42)throw Error("Invalid owner address length.");if(!e.ownerAddress.startsWith("0x"))throw Error("Invalid owner address.");this.params=e,this.params.contractAddress=u.web3().utils.toChecksumAddress(this.params.contractAddress),this.params.ownerAddress=u.web3().utils.toChecksumAddress(this.params.ownerAddress),this.params.operatorIds=[...this.params.operatorIds].sort((a,i)=>a-i)}scan(){return y(this,null,function*(){return this.getClusterSnapshot(!1)})}execute(){return y(this,null,function*(){console.log(`
Scanning blockchain...`),this.progressBar=new f.default.SingleBar({},f.default.Presets.shades_classic);let e=yield this.getClusterSnapshot(!0);return this.progressBar.stop(),e})}getClusterSnapshot(e){return y(this,null,function*(){let t;try{t=yield u.web3(this.params.nodeUrl).eth.getBlockNumber()}catch(s){throw new Error("Could not access the provided node endpoint.")}try{yield u.contract(this.params.nodeUrl,this.params.contractAddress).methods.owner().call()}catch(s){throw new Error("Could not find any cluster snapshot from the provided contract address.")}let a=this.MONTH,i,o=0,l=u.web3().eth.abi.encodeParameter("address",this.params.ownerAddress),p={fromBlock:t-a,toBlock:t,topics:[null,l]};for(e&&this.progressBar.start(t,0);!i&&p.fromBlock>0;){let s;try{s=yield u.contract(this.params.nodeUrl,this.params.contractAddress).getPastEvents("allEvents",p),s.filter(r=>this.eventsList.includes(r.event)).filter(r=>JSON.stringify(r.returnValues.operatorIds.map(C=>+C))===JSON.stringify(this.params.operatorIds)).forEach(r=>{r.blockNumber>o&&(o=r.blockNumber,i=r.returnValues.cluster)}),p.toBlock=p.fromBlock}catch(r){console.error(r),a===this.MONTH?a=this.WEEK:a===this.WEEK&&(a=this.DAY)}p.fromBlock=p.toBlock-a,e&&this.progressBar.update(t-(p.toBlock-a))}return e&&this.progressBar.update(t,t),i=i||["0","0","0","0","0",!1],{payload:{Owner:this.params.ownerAddress,Operators:this.params.operatorIds.sort((s,r)=>s-r).join(","),Block:o||t,Data:i.join(",")},cluster:{validatorCount:i[0],networkFeeIndex:i[1],index:i[2],balance:i[3],active:i[4]}}})}isValidOperatorIds(e){return!(e<4||e>13||e%3!=1)}};var V=n=>y(void 0,null,function*(){return new Promise(e=>{(0,I.default)(n,(t,a)=>{if(t)return e("");e(a)})})});function w(){return y(this,null,function*(){let n=new g.ArgumentParser;n.add_argument("-n","--node-url",{help:"The ETH1 node url.",required:!0,dest:"nodeUrl"}),n.add_argument("-ca","--ssv-contract-address",{help:"The SSV Contract address, used to find the latest cluster data snapshot. Refer to https://docs.ssv.network/developers/smart-contracts",required:!0,dest:"contractAddress"}),n.add_argument("-oa","--owner-address",{help:"The owner address regarding the cluster that you want to query",required:!0,dest:"ownerAddress"}),n.add_argument("-oids","--operator-ids",{help:"Comma-separated list of operators IDs regarding the cluster that you want to query",required:!0,dest:"operatorIds"});let e=`Cluster Scanner v${b.version}`,t=yield V(e);if(t){console.log(" -----------------------------------------------------------------------------------"),console.log(`${t||e}`),console.log(" -----------------------------------------------------------------------------------");for(let a of String(b.description).match(/.{1,75}/g)||[])console.log(` ${a}`);console.log(` -----------------------------------------------------------------------------------
`)}try{let a=n.parse_args();a.operatorIds=a.operatorIds.split(",").map(l=>{if(Number.isNaN(+l))throw new Error("Operator Id should be the number");return+l}).sort((l,p)=>l-p);let o=yield new c(a).execute();console.table(o.payload),console.log("Cluster snapshot:"),console.table(o.cluster),console.log(JSON.stringify({block:o.payload.Block,"cluster snapshot":o.cluster,cluster:Object.values(o.cluster)},null,"  "))}catch(a){console.error("\x1B[31m",a.message)}})}w();})();
