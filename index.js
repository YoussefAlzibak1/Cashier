function cashCounter(price, paid) {
    const denominations = [
        { name: "50 Euro", value: 50 },
        { name: "20 Euro", value: 20 },
        { name: "10 Euro", value: 10 },
        { name: "5 Euro", value: 5 },
        { name: "2 Euro", value: 2 },
        { name: "1 Euro", value: 1 },
        { name: "0.5 Euro", value: 0.5 },
        { name: "0.2 Euro", value: 0.2 },
        { name: "0.1 Euro", value: 0.1 },
        { name: "0.05 Euro", value: 0.05 },
        { name: "0.02 Euro", value: 0.02 },
        { name: "0.01 Euro", value: 0.01 },
    ];

    let change = paid - price;
    console.log(change);
    const result = [];

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const count = Math.floor(change / denomination.value);

        if (count > 0) {
            result.push({ [denomination.name]: count });
            change -= count * denomination.value; 
        }
    }

    return result;
};


function createCashCounter() {
    let cashBox = [
        { 50: 10 },
        { 20: 10 },
        { 10: 10 },
        { 5: 25 },
        { 2: 25 },
        { 1: 25 },
        { 0.5: 25 },
        { 0.2: 25 },
        { 0.1: 25 },
        { 0.05: 25 },
        { 0.02: 25 },
        { 0.01: 25 },
    ];

    return function (price, paid) {
        const denominations = [
            { name: "50 Euro", value: 50 },
            { name: "20 Euro", value: 20 },
            { name: "10 Euro", value: 10 },
            { name: "5 Euro", value: 5 },
            { name: "2 Euro", value: 2 },
            { name: "1 Euro", value: 1 },
            { name: "0.5 Euro", value: 0.5 },
            { name: "0.2 Euro", value: 0.2 },
            { name: "0.1 Euro", value: 0.1 },
            { name: "0.05 Euro", value: 0.05 },
            { name: "0.02 Euro", value: 0.02 },
            { name: "0.01 Euro", value: 0.01 },];
        const change = paid - price;
        const result = [];

        for (let i = 0; i < denominations.length; i++) {
            const denomination = denominations[i];
            const count = Math.floor(change / denomination.value);

            if (count > 0) {
                result.push({ [denomination.name]: count });
                for (let j = 0; j < cashBox.length; j++) {
                    const note = Object.keys(cashBox[j])[0];
                    if (parseFloat(note) === denomination.value) {
                        cashBox[j][note] += count;
                        break;
                    }
                }
            }

            change -= count * denomination.value;
        }

        if (change > 0) {
            return "Customer should pay " + change.toFixed(2) + " more Euro";
        }

        return result;
    };
}

let cashCounter11 = createCashCounter();
console.log(cashCounter(3.75, 50));

console.log(cashCounter(4.5, 20));
console.log(cashCounter(4, 3));
console.log(cashCounter(100, 100));
console.log(cashCounter(5.5, 10));



console.log( cashCounter11);