"use strict"

// let colorFon = 'green';
// let colorColor = `red ${colorFon}`;
// console.log(colorColor);

// console.log(colorColor);
// console.log(colorColor);

// const topMargin =
//     "color black red green" + 12;
// console.log(topMargin[6].toUpperCase());

// console.log(colorFon.length);
// console.log(colorColor.length);

// let bigFounds = 'ПРИВІТ CТЕПАН!';
// console.log(bigFounds.toLowerCase());

// console.log(bigFounds.toLocaleLowerCase().includes("пан"));
// console.log(bigFounds.toLocaleLowerCase().startsWith("привіт"));
// console.log(bigFounds.toLocaleLowerCase().endsWith("!"));

// let colorBlue = bigFounds[bigFounds.length - 1];
// console.log(colorBlue);

// colorFon = "color red";
// console.log(colorFon.slice(0, 8));

// console.log('bw' < 'BW');

// let someName = '3';
// let someCame = '10';
// console.log(someName * someCame);
// someCame -= 5;
// console.log(someCame);
// someCame--;
// console.log(someCame);
// console.log(someCame < someName || someCame);
// console.log(someName && 0);
let numNumber = Math.round(1.005 * 100) / 100 + Number.EPSILON;
console.log(numNumber);
let value = parseFloat("135.58px");
console.log(value);
console.log(Math.max(10, 58, 39, -150, 0));
console.log(Math.floor(58.858));
let valueIntro = 58 + "Фрилансер";
if (valueIntro = 58 + "Фрилансер" !== NaN) {
    console.log('Результат виразу NaN');
}

let lorTom = 13;
let kotLock = lorTom++;
console.log(kotLock);
console.log(!false && 11 || 18 && "");
let nameColor = 0;
console.log(nameColor ?? "collor red");


let text = `Фрилансер`;
console.log(text[5]);
console.log(text.toUpperCase());

console.log(text.slice(3, 6));
console.log(text.includes('лан', 4));

// for (let forLop = 0; forLop < 5; forLop++) {
//     console.log(forLop);
// }

for (let color = 1; color < 6; color++) {
    console.log(color);
}

// let volmeRed = 8;
// while (volmeRed) {
//     console.log(volmeRed);
//     volmeRed--;
// }

// for (let numMax = 0; numMax < 3; numMax++) {
//     console.log(`Число: ${numMax}`);
// }

let fiveTop = 0
while (fiveTop < 3) {
    console.log(`Число: ${fiveTop}`);
    fiveTop++;
}

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) {
            break firstFor
        };
        console.log(size);
    }
}

if (1 === "1") {
    console.log(`Color`);
} else {
    console.log(`green hof`)
}

let massange = (92 > "20" && 20 < 100) ? 'color red' : "not home";
console.log(massange);

if (0) {
    console.log("topGir");
} else if (" ") {
    console.log("good job");
}

for (let jonHop = 5; jonHop; jonHop--) {
    if (jonHop == 3) continue
    console.log(jonHop);
}


let rodmdFpe = (2 > 2) ? "idmdid" : "000000";
console.log(rodmdFpe);

// ___________________________________
//масиви

// let gopTop = ["Dft", "Lor", "Pol"];
// console.log(gopTop);
// gopTop.forEach((gopTop) => {
//     console.log(gopTop);
// });

// gopTop.push("777");
// console.log(gopTop)

// if (!gopTop.includes(10)) {
//     gopTop.push("rodnsosn", 100)
//     console.log(gopTop);
// }