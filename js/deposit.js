document.getElementById("depositBtn").addEventListener("click", function () {
    
    //newDepositAmount
    let newDepositAmount = document.getElementById("newDepositAmount");
    let newDepositAmountValue = newDepositAmount.value;
    let newDepositAmountValueStr = parseFloat(newDepositAmountValue);
    
    if(isNaN(newDepositAmountValueStr)){
        alert("please enter integer number");
    }

    newDepositAmount.value = '';

    //previousDepositAmount
    let previousDepositAmount = document.getElementById("previousDepositAmount");
    let previousDepositAmountValue = previousDepositAmount.innerText;
    let previousDepositAmountValueStr = parseFloat(previousDepositAmountValue);

    //newDepositAmount + previousDepositAmount
    let totalDepositAmount = previousDepositAmountValueStr + newDepositAmountValueStr;

    previousDepositAmount.innerText  = totalDepositAmount;

    //previousTotalAmount
    let previousTotalAmount = document.getElementById("previousTotalAmount");
    let previousTotalAmountValue = previousTotalAmount.innerText;
    let previousTotalAmountValueStr = parseFloat(previousTotalAmountValue);
    
    //total
    let total = previousTotalAmountValueStr + newDepositAmountValueStr;

    previousTotalAmount.innerText = total;
    



})