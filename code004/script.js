const myNumber = 70;
let binario = "";

for (let i = myNumber; i >= 1 ; i = Math.floor(i/2)) {
  if (i % 2 == 0) {
    binario = "0" + binario;
  } else {
    binario = "1" + binario;
  }
}
console.log('For Loop: ' + binario);

let i = myNumber;
binario = "";
while (i >= 1) {
  if (i % 2 == 0) {
    binario = "0" + binario;
  } else {
    binario = "1" + binario;
  }

  i = Math.floor(i/2);
}

console.log('While loop: ' + binario);