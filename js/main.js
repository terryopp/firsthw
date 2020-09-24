window.onload = function() {
    let input = document.getElementById('text');
    let output = document.getElementById('output');
    let type = document.getElementById('type');
    let amount = document.getElementById('amount');
    let error = document.getElementById('error');

    let encrypt = new Cipher();

    let selectedType = true;
    let amountValue = amount.value*1;

    function encryptText() {
        let text = input.value;
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
        if (!isNaN(amount.value*1) && amount.value*1 > 0 && amount.value*1 < 26 && Number.isInteger(amount.value*1)) {
            amountValue = amount.value*1;
            error.innerHTML = "";
            encryptText();
        } else {
            amount.value = "";
            error.innerHTML = "Пожалуйста, введите целое число от 1 до 26"
        }
    });

    input.addEventListener("input", () => {
        encryptText();
    });
}