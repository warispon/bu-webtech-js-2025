// รับค่าจากผู้ใช้
let input = prompt("Input integer number");

// แปลงเป็น Number
let number = Number(input);

// ตรวจสอบว่าเป็นจำนวนเต็มหรือไม่
if (!Number.isInteger(number)) {
  alert("Invalid input! Please enter an integer number only.");
} else {
  // ตรวจสอบว่าเป็นศูนย์ เลขคู่ หรือเลขคี่
  if (number === 0) {
    alert("zero integer number");
  } else if (number % 2 === 0) {
    alert("even integer number");
  } else {
    alert("odd integer number");
  }
}
