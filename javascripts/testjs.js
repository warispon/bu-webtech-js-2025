
let input = prompt("Input integer number");

let number = Number(input);

if (!Number.isInteger(number)) {
  alert("Invalid input! Please enter an integer number only.");
} else {
 
  if (number === 0) {
    alert("zero integer number");
  } else if (number % 2 === 0) {
    alert("even integer number");
  } else {
    alert("odd integer number");
  }
}
