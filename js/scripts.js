$(document).ready(function() {

var multiply = function(number1, number2){
return number1 * number2;
};
var add = function(number1, number2){
return number1 + number2;
};
var subtract = function(number1,number2){
return number1 - number2;
};
var divide = function(number1,number2){
return number1 / number2;
};
  $("#add").click(function(event) {

    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("#subtract").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
    event.preventDefault();

  });
  $("#multiply").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
    event.preventDefault();

  });
  $("#divide").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
    event.preventDefault();

  });
});
