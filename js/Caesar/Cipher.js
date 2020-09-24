function Cipher() {      
    this.encrypt = function (text, amount) {
        let output='';
        for (let i = 0; i < text.length; i++) {
            let letter = text[i];
            if (letter.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
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
}