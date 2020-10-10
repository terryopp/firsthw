window.onload = function() {
    let input = document.getElementById('text');
    let output = document.getElementById('output');
    let type = document.getElementById('type');
    let amount = document.getElementById('amount');

    let encrypt = new Cipher();
    let error = new Error();

    let selectedType = true;
    let amountValue = amount.value*1;

    function encryptText() {
        let text = input.value;
        error.input(text);
        if (selectedType) {
            output.value = encrypt.encrypt(text, amountValue);
        } else {
            output.value = encrypt.decrypt(text, amountValue);
        }
    }

    type.addEventListener("click", () => {
        selectedType = !selectedType;
        if (selectedType) {
            type.value = 'шифровка';
        } else {
            type.value = 'расшифровка';
        }
        encryptText();
    });

    amount.addEventListener("input", () => {
        if (error.amount(amount.value*1)) {
            amountValue = amount.value*1;
            encryptText();
        } else {
            amount.value = "";
        }
    });

    input.addEventListener("input", () => {
        encryptText();
    });
}