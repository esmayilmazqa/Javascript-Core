
let counter = 2;

for (let i = 0; i < 10; i++) {
    console.log(i);
    counter++;
    if (i % 2 == 0) {
        continue;
    }
    if (counter > 5) {
        break;
    }
}