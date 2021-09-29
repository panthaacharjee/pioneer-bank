/*  Display block*/
var login = document.getElementById("login-form");
var submit = document.getElementById("submit");
var main = document.getElementById("main");
main.style.display = "none";
submit.addEventListener('click', function(){
    login.style.display = "none";
    main.style.display = "block";
})

/* Deposit Amount */
var depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener('click', function(){
    var currentDeposit = document.getElementById("currentDeposit").innerText;
    var depositForm = document.getElementById("deposit-form");
    
    var depositAmount = parseFloat(depositForm.value);
    var deposit = parseFloat(currentDeposit);
    var total = depositAmount + deposit;
    document.getElementById("currentDeposit").innerText = total;

    var currentBalance = document.getElementById("currentBalance").innerText;
    var currentBalanceNmbr = parseFloat(currentBalance);
    var totalCurrent = total + currentBalanceNmbr;
    document.getElementById("currentBalance").innerText = totalCurrent;

    depositForm.value = " "
})

/*Withdraw Amount*/
var withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener('click', function(){
    var currentWithdraw = document.getElementById("currentWithdraw").innerText;
    var withdrawForm = document.getElementById("withdraw-form");
    
    var withdrawAmount = parseFloat(withdrawForm.value);
    var withdraw = parseFloat(currentWithdraw);
    var total = withdrawAmount + withdraw;
    document.getElementById("currentWithdraw").innerText = total;

    var currentBalance = document.getElementById("currentBalance").innerText;
    var currentBalanceNmbr = parseFloat(currentBalance);
    var totalCurrent =  currentBalanceNmbr-total;
    document.getElementById("currentBalance").innerText = totalCurrent;

    withdrawForm.value = " "
})
