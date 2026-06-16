var maths =Number(prompt('enter your marks in the maths subject'));
var chem = Number(prompt('enter your marks in the chem subject'));
var physics = Number(prompt('enter your marks in the physics subject'));

var avg = Number(((maths + chem + physics) / 3).toFixed(2));
console.log("marks = ",avg.toFixed(2)); /* .toFixed(2)  : - for limiting the digits after the point*/
if (avg >= 85) {
  if (avg >= 95 && avg <= 95) {
    console.log('you topper mf !');
  }
  if (avg >= 99 || avg === 100) {
    console.log('Saale padhta hai ki khata hai !!');
  }
  if (avg > 100) {
    console.log('saale legit marks input kar !');
  }
} else {
  console.log('you didnt passed the exam mf heheheh !');
}
/* to print the marks in js -> console.log("avg marks =",avg)
to printf the marks in C -> printf("avg marks =",avg);
HOW SIMILAR!! */