const alphabet = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ 0123456789"
const alphabetSimplified = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ"

export const encryptGamma = (text: string, gammaEncrypt: string): string => {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charIndex = alphabet.indexOf(char);
        if (charIndex === -1) {
            encryptedText += char;
        } else {
            const gammaChar = gammaEncrypt[i % gammaEncrypt.length];
            const gammaIndex = alphabet.indexOf(gammaChar);
            const newIndex = (charIndex + gammaIndex) % alphabet.length;
            encryptedText += alphabet[newIndex];
        }
    }
    return encryptedText;
};

export const decryptGamma = (encryptedText: string, gammaDecrypt: string): string => {
    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
        const char = encryptedText[i];
        const charIndex = alphabet.indexOf(char);
        if (charIndex === -1) {
            decryptedText += char;
        } else {
            const gammaChar = gammaDecrypt[i % gammaDecrypt.length];
            const gammaIndex = alphabet.indexOf(gammaChar);
            // Вираховуємо індекс символа в оригінальному алфавіті
            let newIndex = charIndex - gammaIndex;
            if (newIndex < 0) {
                // Обробка випадку виходу за межі алфавіту
                newIndex += alphabet.length;
            }
            decryptedText += alphabet[newIndex];
        }
    }
    return decryptedText;
};


export const encryptVigenere = (text: string, key: string): string => {
    let encryptedText = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charIndex = alphabetSimplified.indexOf(char);

        if (charIndex === -1) {
            encryptedText += char;
        } else {
            const keyChar = key[keyIndex % key.length];
            const keyIndexInAlphabet = alphabetSimplified.indexOf(keyChar);

            const newIndex = (charIndex + keyIndexInAlphabet) % alphabetSimplified.length;
            encryptedText += alphabetSimplified[newIndex];

            keyIndex++;
        }
    }

    return encryptedText;
};

export const decryptVigenere = (encryptedText: string, key: string): string => {
    let decryptedText = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedText.length; i++) {
        const char = encryptedText[i];
        const charIndex = alphabetSimplified.indexOf(char);

        if (charIndex === -1) {
            decryptedText += char;
        } else {
            const keyChar = key[keyIndex % key.length];
            const keyIndexInAlphabet = alphabetSimplified.indexOf(keyChar);

            let newIndex = charIndex - keyIndexInAlphabet;
            if (newIndex < 0) {
                newIndex += alphabetSimplified.length;
            }

            decryptedText += alphabetSimplified[newIndex];

            keyIndex++;
        }
    }

    return decryptedText;
};