function feistelFunction(left: number, right: number, roundKey: number): [number, number] {
    const newLeft = right;
    const newRight = left ^ (right + roundKey);
    return [newLeft, newRight];
}

function padText(text: string, blockLength: number): string {
    const paddingLength = blockLength - (text.length % blockLength);
    if (paddingLength !== blockLength) {
        const padding = String.fromCharCode(paddingLength);
        return text + padding.repeat(paddingLength);
    }
    return text;
}

export function feistelEncrypt(plaintext: string, numRounds: number, key: number): string {
    const blockLength = 2;
    let ciphertext = '';

    plaintext = padText(plaintext, blockLength);

    for (let i = 0; i < plaintext.length; i += blockLength) {
        let [left, right] = [plaintext.charCodeAt(i), plaintext.charCodeAt(i + 1)];

        for (let round = 0; round < numRounds; round++) {
            [left, right] = feistelFunction(left, right, key);
        }

        ciphertext += String.fromCharCode(left, right);
    }

    return ciphertext;
}

export function feistelDecrypt(ciphertext: string, numRounds: number, key: number): string {
    const blockLength = 2;
    let plaintext = '';

    for (let i = 0; i < ciphertext.length; i += blockLength) {
        let [left, right] = [ciphertext.charCodeAt(i), ciphertext.charCodeAt(i + 1)];

        for (let round = 0; round < numRounds; round++) {
            const roundKey = key; 
            [right, left] = feistelFunction(right, left, roundKey);
        }

        const block = String.fromCharCode(left, right);
        plaintext += block;
    }

    return plaintext;
}