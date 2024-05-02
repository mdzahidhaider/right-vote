function maxScientificValue(instruments, payload, volume) {
    instruments.sort((a, b) => (b.v / b.w) - (a.v / a.w));

    let selected = [];
    let totalW = 0;
    let totalV = 0;
    let totalS = 0;

    for (let i = 0; i < instruments.length; i++) {
        const instrument = instruments[i];
        if (totalW + instrument.w <= payload && totalV + instrument.v <= volume) {
            selected.push(instrument);
            totalW += instrument.w;
            totalV += instrument.v;
            totalS += instrument.s;
        }
    }

    return {
        selected,
        totalWeight: totalW,
        totalVolume: totalV,
        totalScientificValue: totalS
    };
}

const instruments = [
    { w: 3, v: 2, s: 10 },
    { w: 4, v: 3, s: 15 },
    { w: 2, v: 1, s: 8 },
    { w: 5, v: 4, s: 20 }
];

const payloadCapacity = 10;
const volumeCapacity = 7;

const result = maxScientificValue(instruments, payloadCapacity, volumeCapacity);
console.log("Selected Instruments:", result.selected);
console.log("Total Weight:", result.totalWeight, "kg");
console.log("Total Volume:", result.totalVolume, "m^3");
console.log("Total Scientific Value:", result.totalScientificValue);
