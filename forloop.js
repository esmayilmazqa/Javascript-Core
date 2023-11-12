for (let i = 0; i < 5; i++) {
    console.log("i : " + i);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0 || i % 5 == 0) {
        console.log(i);
    }
}