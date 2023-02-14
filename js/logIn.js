document.getElementById("logInBtn").addEventListener('click', function () {
    
    //userEmail section
    let userEmailInput = document.getElementById("userEmail");
    let userEmailValue = userEmailInput.value;
    
    //userPassword section
    let userPasswordInput = document.getElementById("userPassword");
    let userPasswordValue = userPasswordInput.value;

    //my Email and Password
    let myEmail = "amirhossainsohan@gmail.com";
    let myPassword = "sohan77719ctg";

    //validation checking
    if(userEmailValue === myEmail && userPasswordValue === myPassword){
        window.location.href = "bankAccount.html";
    }else{
        alert("please! Enter your valid Email and Password");
    }




})