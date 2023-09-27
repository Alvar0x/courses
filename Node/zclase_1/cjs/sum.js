function sum(...args) {
    let n = 0;
    for (let i = 0; i < args.length; i++) {
        n += args[i];
    }
    return n;
}

module.exports = { sum }