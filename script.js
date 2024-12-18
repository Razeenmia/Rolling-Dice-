var dice;
var dices=   [
  '\u2680', // ⚀ (die face 1)
  '\u2681', // ⚁ (die face 2)
  '\u2682', // ⚂ (die face 3)
  '\u2683', // ⚃ (die face 4)
  '\u2684', // ⚄ (die face 5)
  '\u2685'  // ⚅ (die face 6)
];
var stopped=true;
var t;
function change() {
   var random = Math.random()*6;
}