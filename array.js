//ex3
//q1
let y=function (x){
let num="";
for(i=x.length;i>=0;i--){
num+=x[i];
}
return num;
}
let x="532443";
console.log(y(x));


//q2
for(i=0;i<=15;i++){
     if(i%2==0){
        console.log(i+" is even");
    }
    else if(i%2!=0){
        console.log(i+" is odd");
    }
}

//q3
let input = "Orange";
let output = sortAlpha(input);
console.log(output);  


//q4

  
  let inputDash = "025468";
  let outputDash = evenDash(inputDash);
  console.log(outputDash);
  
  function sortAlpha(input) {
    let lowercase = input.toLowerCase();
    let sortingString = lowercase.split("").sort().join("");
  
    return sortingString;
}


//q5
function evenDash(input) {
    let numberString = input.toString();
    let result = "";
  
    for (let i = 0; i < numberString.length; i++) {
      result += numberString[i];
      if (
        i < numberString.length - 1 &&
        parseInt(numberString[i]) % 2 === 0 &&
        parseInt(numberString[i + 1]) % 2 === 0
      ) {
        result += "-";
      }
    }
  
    return result;
  }