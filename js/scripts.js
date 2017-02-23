var result = (function(number){
  // var digits=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // var roman=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var one=["","I","II","III","IV","V","VI","VII","VIII","IX"];
  var ten=["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  var hundred=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  var thousand=["","M","MM","MMM"];
  var text2 = "";
  for(var i=0;i<number.length;i++)
  if (number.length===1) {
    text2 = one[number[i]];
    console.log(text2);
  } else if (number.length===2) {
    text2 = ten[number[0]] + one[number[i]];
    console.log(text2);
  } else if (number.length===3) {
    text2 = hundred[number[0]] + ten[number[1]] + one[number[i]];
    console.log(text2);
  } else if (number.length===4) {
    text2 = thousand[number[0]] + hundred[number[1]] + ten[number[2]] + one[number[i]];
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
