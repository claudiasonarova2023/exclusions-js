let billAmount = document.getElementById('bill-amount');
let percentTip = document.getElementById('percentage-tip');
let tipAmount = document.getElementById('tip-amount');
let total = document.getElementById('total');
let calculate = document.getElementById('calculate');

// Add code to trigger analysis. Insert a bug.
const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if((height === '') || (height < 0) || (isNaN(height))){
        //NaN !== NaN
        results.innerHTML = "Please provide a valid height";
    }

calculate.addEventListener('click', function(){
    billAmount = Number(billAmount.value);
    percentTip = Number(percentTip.value);

    if (isNaN(billAmount) || billAmount <= 0 || billAmount === null){
        alert('Please enter a valid Bill Amount')
    }
    else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null){
        alert('Please enter a valid Tip Percentage')
    }
    else {
        let calculatedTip =  percentTip/100*billAmount;
        tipAmount.value = '$' + calculatedTip;

        let calculatedTotal = billAmount + calculatedTip;
        total.value = '$' + calculatedTotal;
    }
    

})
