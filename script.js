async function convertCurrency(){

let amount = document.getElementById("amount").value;
let from = document.getElementById("fromCurrency").value;
let to = document.getElementById("toCurrency").value;

if(amount === "" || amount <= 0){
document.getElementById("result").innerText = "Please enter a valid amount.";
return;
}

try{

let response = await fetch(`https://api.exchangerate.host/latest?base=${from}&symbols=${to}`);

let data = await response.json();

let rate = data.rates[to];

let convertedAmount = amount * rate;

document.getElementById("result").innerText =
`${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;

}

catch(error){

document.getElementById("result").innerText =
"Unable to fetch exchange rates. Please try again.";

}

}
