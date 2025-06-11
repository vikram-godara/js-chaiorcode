let score ="abc"
console.log(typeof score);
console.log(typeof(score));

// Number is capital word 
let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber); //NaN for score  "33abc"
 

//"33" =>33
//"33abc"=> NaN
//null => 0
//true  =>1;false =>0


let isloggedIn = 1;
let booleanISLoggedIN = Boolean(isloggedIn);
console.log(booleanISLoggedIN); //true

// 1=>TRUE ;0=>FALSE
 // "" =false
 //"vikram"=>true

 let someNumber = 34
 let stringNumber = String(someNumber)
 console.log(stringNumber); //34
 console.log(typeof stringNumber); //string