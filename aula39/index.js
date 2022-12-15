// While

let control = 0;

while (control <= 10) {
    console.log(control);
    control++;
}

do {
    console.log(control);
    control++;
} while (control <= 10);

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);

console.log(rand);