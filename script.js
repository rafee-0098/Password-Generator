const inputPassword = document.getElementById("input") ;
const length = 8;

  const passKeyUpper = "ABCSEFGHIJKLMNOPQRSTUVWXYZ ";
  const passKeyLower = "abcdefghijklmnopqrstuvwxyz";
const passKeySymbol =" @#$%^&*()/?";
const number =" 0123456789";
const randomPW=     passKeyUpper + passKeyLower + passKeySymbol + number  ;

  function GeneratePass(){
   let password = "";
   password += passKeyUpper [Math.floor(Math.random() * passKeyUpper.length)];
   password +=passKeyLower [ Math.floor(Math.random() * passKeyLower.length)];
   password +=passKeySymbol [ Math.floor(Math.random() *passKeySymbol.length)];

password += number  [ Math.floor(Math.random()*number.length)];
   
    while(length > password.length){
      password +=
       randomPW[Math.floor (Math.random () *randomPW.length) ]
    }
    inputPassword.value =  password  ;
  }
  function copyPassword(){
    inputPassword.select();
    document.execCommond("copy");
  
    
  }
