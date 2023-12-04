function utf16Encode(input: any) {
    var output = [], i = 0, len = input.length, value;
    while (i < len) {
        value = input[i++];
        if ((value & 0xF800) === 0xD800) {
            throw new RangeError("UTF-16(encode): Illegal UTF-16 value");
        }
        if (value > 0xFFFF) {
            value -= 0x10000;
            output.push(String.fromCharCode(((value >>> 10) & 0x3FF) | 0xD800));
            value = 0xDC00 | (value & 0x3FF);
        }
        output.push(String.fromCharCode(value));
    }
    return output.join("");
}

function fixedCharCodeAt(str: string, idx: number) {
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx + 1);
        if (isNaN(low)) {
            throw Error('High surrogate not followed by low surrogate in fixedCharCodeAt()');
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) {
        return false;
    }
    return code;
}

export const encryptTextSteganograph = (container: string, encrypt: string): string => {
    const containerArr = container.split(" ");
    if (containerArr.length < 2)
        alert("Need at least one space")

    let finalstring = "";
    let temptagstring = ""

    for (let LettersIndex = 0; LettersIndex < encrypt.length; LettersIndex++)
        temptagstring = temptagstring + utf16Encode([encrypt.charCodeAt(LettersIndex) + 0xE0000]);

    finalstring = container + temptagstring;

    return finalstring
}

export const decryptTextSteganograph = (decrypt: string): string => {
    let finalstring = "";

    for (let LettersIndex = 0; LettersIndex < decrypt.length; LettersIndex++) {
        let tempchr = fixedCharCodeAt(decrypt, LettersIndex);
        if (tempchr && tempchr > 0xE0000) {
            finalstring = finalstring + utf16Encode([tempchr - 0xE0000])
        }
    }

    return finalstring
}

export const realCharCount = (str: string): number => {
    var count = 0;
    for (let idx = 0; idx < str.length; idx++) {
        var code = str.charCodeAt(idx);
        if (0xD800 <= code && code <= 0xDFFF) {
            count = count + .5;
        } else {
            count++;
        }
    }
    return count;
}

export const charCodesFromString = (input: string): string => {
    const charCodes = input.split('').map(char => char.charCodeAt(0));
    return charCodes.join(', ');
}
