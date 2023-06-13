let value01 = prompt("Insira o valor da primeira nota");

let weight01 = prompt("Insira o peso da primeira nota");

let value02 = prompt("Insira o valor da segunda nota");

let weight02 = prompt("Insira o peso da segunda nota");

let value03 = prompt("Insira o valor da terceira nota");

let weight03 = prompt("Insira o peso da terceira nota");

let value04 = prompt("Insira o valor da quarta nota");

let weight04 = prompt("Insira o peso da quarta nota");

let weightedAverage =
  ((value01 * weight01) +
  (value02 * weight02) +
  (value03 * weight03) +
  (value04 * weight04)) /
    (parseInt(weight01) +
      parseInt(weight02) +
      parseInt(weight03) +
      parseInt(weight04));

alert("A média das notas é: " + weightedAverage);
