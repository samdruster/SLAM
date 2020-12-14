const Web3= require('web3');

const RPC_ENDPOINT="http://localhost:8545" //https://ropsten.infura.io

var web3= new Web3(new Web3.providers.HttpProvider(RPC_ENDPOINT));

web3.eth.defaultAccount= web3.eth.Accounts[0];

var abi=([
	{
		"constant": false,
		"inputs": [
			{
				"name": "Humidity",
				"type": "int8"
			}
		],
		"name": "SetHumidity",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Temp",
				"type": "int8"
			}
		],
		"name": "SetTemp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceDetailH",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceDetailT",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceSensorReadingH",
		"outputs": [
			{
				"name": "",
				"type": "int8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceSensorReadingT",
		"outputs": [
			{
				"name": "",
				"type": "int8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceSensorTypeH",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceSensorTypeT",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceStatusH",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ComplianceStatusT",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_MinHumidity",
				"type": "int8"
			},
			{
				"name": "_MaxHumidity",
				"type": "int8"
			},
			{
				"name": "_MinTemp",
				"type": "int8"
			},
			{
				"name": "_MaxTemp",
				"type": "int8"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var address="0x53E3c9F909E405e4fa572ED9F3c18A2d35a2a961";

var SimpleContract= web3.eth.contract(abi);

var SimpleContractInstance = SimpleContract.at(address);

SimpleContractInstance.get(function(error, result){
    if(!error)
        {
            $("#instructor").html(result[0]+' ('+result[1]+' ('+result[2]+' ('+result[3]);
            console.log(result);
        }
    else
        console.error(error);
});

$("#button").click(function() {
    Coursetro.setInstructor($("#MinHumidity").val(), $("#MaxHumidity").val(), $("#MinTemp").val(), $("#MaxTemp").val());
});