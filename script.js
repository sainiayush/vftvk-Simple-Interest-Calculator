// Function for updating Interest rate 
function updateRate(updateRateAmount){
  document.getElementById("rate_val").innerText = updateRateAmount + "%";
}

//Function for computing and displaying Simple Interest
function compute(){
  
let principal = document.getElementById("principal").value; // Principal
if(principal <= 0){
  document.getElementById("principal").innerHTML = "0";
  alert("Please enter a positive number");
  document.getElementById("principal").focus();
  return;
}
let rate = document.getElementById("rate").value; // Rate of Interest
let years = document.getElementById("years").value; // Year

let interest = (principal*years*rate)/100; // SI Formulae

let year = new Date().getFullYear() + parseInt(years); // Current Year + Year

  // Variables for calculating SI
  let principal_span = document.getElementById("principal-span");
  let rate_span = document.getElementById("rate-span");
  let result_span = document.getElementById("result-span");
  let year_span = document.getElementById("year-span");

   //For  changing the fields
  principal_span.innerHTML = principal;
  rate_span.innerHTML = rate;
  year_span.innerHTML = year;
  result_span.innerHTML = interest;

  document.getElementById("result").style.display = 'block';

}



