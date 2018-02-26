module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  let a = +arr[0];
  let b = +(arr[3] + arr[4]);
  let c = +(arr[7] + arr[8]);
  let d = b ** 2 - 4 * a * c
  let sq = Math.sqrt(d);
  let x1 = Math.round((-b + sq) / (2 * a));
  let x2 = Math.round((-b - sq) / (2 * a));
  return [x1, x2].sort((a, b) => a - b);
}
