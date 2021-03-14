module.exports = function reverse(n) {
    let reverseN;
    if (n > 0) {
        reverseN = Number(String(n)
            .split('')
            .reverse()
            .join('')
        )
    }

    if (n < 0) {
        reverseN = Number(String(-n)
            .split('')
            .reverse()
            .join('')
        )
    }

    return reverseN;
}