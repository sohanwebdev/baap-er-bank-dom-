document.getElementById("withdrawBtn").addEventListener("click", function () {

    //newWithdrawAmount
    let newWithdrawAmount = document.getElementById("newWithdrawAmount");
    let newWithdrawAmountValue = newWithdrawAmount.value;
    let newWithdrawAmountValueStr = parseFloat(newWithdrawAmountValue);

    if(isNaN(newWithdrawAmountValueStr)){
        alert("please inter integer number");
    }

    newWithdrawAmount.value = '';

    //previousWithdrawAmount
    let previousWithdrawAmount = document.getElementById("previousWithdrawAmount");
    let previousWithdrawAmountValue = previousWithdrawAmount.innerText;
    let previousWithdrawAmountValueStr = parseFloat(previousWithdrawAmountValue);

    

    //previousTotalAmount
    let previousTotalAmount = document.getElementById("previousTotalAmount");
    let previousTotalAmountValue = previousTotalAmount.innerText;
    let previousTotalAmountValueStr = parseFloat(previousTotalAmountValue);

    if(previousTotalAmountValueStr < newWithdrawAmountValueStr){
        alert("not enough money");
        return;
    }

    let totalWithdrawAmount = previousWithdrawAmountValueStr + newWithdrawAmountValueStr;
    
    previousWithdrawAmount.innerText = totalWithdrawAmount;

    //total
    let total = previousTotalAmountValueStr - newWithdrawAmountValueStr;
    
    previousTotalAmount.innerText = total;


});