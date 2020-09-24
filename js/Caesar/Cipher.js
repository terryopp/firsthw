function Cipher() {      

    this.encrypt = function (text, amount) {
        let output='';
        for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            if (letter.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                console.log(code);
                if (code >= 65 && code <= 90) {
                    letter = String.fromCharCode(((code - 65 + amount) % 26) + 65);
                }
                else if (code >= 97 && code <= 122) {
                    letter = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                }
            }
            output += letter;
        }
        return output;
    }

    this.decrypt = function (text, amount) {
        let output='';
        for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            if (letter.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                console.log(code)
                if (code >= 65 && code <= 90) {
                    let numberLetter = code - 65 - amount;
                    if (numberLetter < 0) {
                        letter = String.fromCharCode(((26 + numberLetter) % 26) + 65);
                    } else {
                        letter = String.fromCharCode((numberLetter % 26) + 65);
                    }
                }
                else if (code >= 97 && code <= 122) {
                    let numberLetter = code - 97 - amount;
                    if (numberLetter < 0) {
                        letter = String.fromCharCode(((26 + numberLetter) % 26) + 97);
                    } else {
                        letter = String.fromCharCode((numberLetter % 26) + 97);
                    }
                }
            }
            output += letter;
        }
        return output;
    }
}