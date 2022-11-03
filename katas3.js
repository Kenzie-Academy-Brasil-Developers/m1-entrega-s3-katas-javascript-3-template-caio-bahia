// EX1
function xRunning(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = "x";
    console.log(arr);
    arr[i] = "-";
  }
}

// xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
// EX2

let nomes = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"];

function vowelCounter(arr) {
  let newarray = [];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < arr.length; i++) {
    let vowelsCount = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (vowels.includes(arr[i][j])) vowelsCount++;
    }
    newarray.push(vowelsCount);
  }

  return newarray;
}
// console.log(vowelCounter(nomes))

// EX3

function stringTripletGroup(str) {
  let newarr = [];

  for (i = 0; i < str.length; i += 3) {
    newarr.push(str.slice(i, i + 3));
  }

  return newarr;
}
// console.log(stringTripletGroup("os tres mosqueteiros"))

// EX4
let caesegatos = ["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT", "Dog"];
let dogcount = 0;
let catcount = 0;

function dominantPet(arr) {
  // percorre array
  for (i = 0; i < arr.length; i++) {
    if (arr[i].toLocaleUpperCase() === "CAT") {
      catcount++;
    } else if (arr[i].toLocaleUpperCase() === "DOG") {
      dogcount++;
    }
  }

  // ALERTS

  if (catcount > dogcount) {
    alert("CAT!");
  } else if (dogcount > catcount) {
    alert("DOG!");
  } else if (dogcount === catcount) {
    alert("DRAW!");
  }
}
// console.log(dominantPet(caesegatos))

// EX5

let list = [14, 25, 32, 50, 35, 30];

function divisibleList(arr, num) {
  let newarr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

// console.log(divisibleList(list,5))

// EX6

function trustMeOrNot(boo, num) {
  let newarray = [];
  for (i = 0; i < num; i++) {
    if (boo === true) {
      newarray.push("True");
    } else if (boo === false) {
      newarray.push("False");
    }
  }
  return newarray;
}

// console.log(trustMeOrNot(true,8))

// EX7

function changeLampStatus(boolean) {
  let newarray = [];

  for (i = 0; i < boolean.length; i++) {
    if (boolean[i] === true) {
      newarray.push("False");
    } else if (boolean[i] === false) {
      newarray.push("True");
    }
  }

  return newarray;
}

// console.log(changeLampStatus([false, false, true, false, true, true, true]))

// EX8

function gradeAverage(arr) {
  let soma = 0;

  for (i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return (soma / arr.length).toFixed(2);
}

// console.log(gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))

// EX9

let notasalunos = [3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7];

function canvasDeliveriesPercentage(arr) {
  let totalPontos = arr.length * 10; //100
  let soma = 0; //71,1

  for (i = 0; i < arr.length; i++) {
    soma += arr[i];
  }

  return alert(
    `A porcentagem total atingida é: ${((soma / totalPontos) * 100).toFixed(
      1
    )}%`
  );
}

// canvasDeliveriesPercentage(notasalunos)

// EX10
let semaforo = ["R", "r", "G", "y", "G", "Y", "g"];

function shouldIGo(arr) {
  let instructions = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i].toLocaleUpperCase() === "R") {
      instructions.push("Stop!");
    } else if (arr[i].toLocaleUpperCase() === "Y") {
      instructions.push("Attention!");
    } else if (arr[i].toLocaleUpperCase() === "G") {
      instructions.push("Go!");
    }
  }
  return instructions;
}

console.log(shouldIGo(semaforo));
