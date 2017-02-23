var result = (function(number){
  // var digits=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // var roman=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  newArray = [];
  number.forEach(function(singleNumber){
    newArray.push(parseInt(singleNumber));
  });
  console.log(newArray);
  var one=["","I","II","III","IV","V","VI","VII","VIII","IX"];
  var ten=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var hundred=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var thousand=["","M","MM","MMM"];
  var text2 = "";
  for(var i=0;i<newArray.length;i++)
  if (newArray.length===1) {
    text2 = one[newArray[i]];
    console.log(text2);
  } else if (newArray.length===2) {
    text2 = ten[newArray[0]] + one[newArray[i]];
    console.log(text2);
  } else if (newArray.length===3) {
    text2 = hundred[newArray[0]] + ten[newArray[1]] + one[newArray[i]];
    console.log(text2);
  } else if (newArray.length===4) {
    text2 = thousand[newArray[0]] + hundred[newArray[1]] + ten[newArray[2]] + one[newArray[i]];
  }
  //   if (number=digits[i]) {
  //     return text2 = (roman[i]);
  // } else if (number>digits[i]) {
  //   return text2 = roman[i].repeat(number-digit[i])
  // }
      return text2;
});

$(function(){
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#inputNumber").val().split("");
    var final = result(userInput)
    console.log(userInput);
    console.log(final);




  });
});
