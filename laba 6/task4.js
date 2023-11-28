function processParameters(...params) {
    let sum = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let words = [];

    params.forEach(param => {
        if (typeof param === 'number') {
            sum += param;
            maxNumber = Math.max(maxNumber, param);
        } else if (typeof param === 'string') {
            words.push(param);
        }
    });

    console.log(`Sum = ${sum}`);
    console.log(`Max Number = ${maxNumber}`);
    console.log(words.join(' '));
}

processParameters('Jane', 1, 3, 'like', 5, 9, 'read', 4, 'book');
