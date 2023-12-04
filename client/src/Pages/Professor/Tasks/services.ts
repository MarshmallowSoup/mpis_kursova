const generateRandomNumber = (n: number): bigint => {
    const bytesNeeded = Math.ceil(n / 8);
    const randomBytes = new Uint8Array(bytesNeeded);
    window.crypto.getRandomValues(randomBytes);

    const mask = (1n << BigInt(n)) - 1n;

    let result = 0n;
    for (let i = 0; i < bytesNeeded; i++)
        result = (result << 8n) | BigInt(randomBytes[i]);

    return result & mask;
}

const isPrime = (n: bigint, k: number = 5): boolean => {
    if (n <= 1n || (n > 2n && n % 2n === 0n))
        return false;
    if (n === 2n || n === 3n)
        return true;

    const s = n - 1n;
    let r = 0;
    let sCopy = s;

    while (sCopy % 2n === 0n) {
        sCopy >>= 1n;
        r++;
    }

    for (let i = 0; i < k; i++) {
        const a = BigInt(Math.floor(Math.random() * (Number(n) - 2))) + 2n; 
        let x = modPow(a, sCopy, n);
        if (x === 1n || x === n - 1n)
            continue;

        let j = 0;
        while (j < r - 1 && x !== n - 1n) {
            x = modPow(x, 2n, n);
            if (x === 1n) {
                return false;
            }
            j++;
        }

        if (x !== n - 1n)
            return false;
    }

    return true;
}
const modPow = (base: bigint, exp: bigint, mod: bigint): bigint => {
    let result = 1n;
    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp = exp >> 1n;
    }
    return result;
}

export const generatePrimeNumber = (t: number, n: number) => {
    const timeStarted = performance.now();
    let result = 0n
    let cirle = 0

    while (!result && cirle < t) {
        const generated = generateRandomNumber(n)
        if (isPrime(generated))
            result = generated
        cirle++
    }
    const timeEnded = performance.now();

    return {
        result: result.toString(),
        time: Math.round((timeEnded - timeStarted) * 100) / 100
    }
}


export const generatePrimesInRange = (start: number, end: number) => {
    const timeStarted = performance.now();
    if (start < 2)
        start = 2; 
    
    const filledArray = new Array(end + 1).fill(true);
    const result: number[] = [];

    for (let p = 2; p * p <= end; p++) {
        if (filledArray[p]) {
            for (let i = p * p; i <= end; i += p) {
                filledArray[i] = false;
            }
        }
    }

    for (let i = start; i <= end; i++) {
        if (filledArray[i]) {
            result.push(i);
        }
    }
    const timeEnded = performance.now();

    return {
        result: result.join(', '),
        time: Math.round((timeEnded - timeStarted) * 100) / 100
    }
}

export const findInitialRoots = (number: number) => {
    const timeStarted = performance.now();
    const result: number[] = [];

    for (let i = 2; i <= 100; i++) {
        const root = Math.pow(number, 1 / i);
        result.push(root);
    }
    const timeEnded = performance.now();

    return {
        result: result.join(', '),
        time: Math.round((timeEnded - timeStarted) * 100) / 100
    }
}