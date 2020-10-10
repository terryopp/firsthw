window.onload = function() {
    let input = document.getElementById('text'); // Ввод текста
    let output = document.getElementById('output'); // Вывод текста
    let type = document.getElementById('type'); // Тип шифрования 
    let amount = document.getElementById('amount'); // Количество сдвигов

    let encrypt = new Cipher(); // Псевдокласс шифрования
    let error = new Error(); // Псевдокласс обработки ошибок

    let selectedType = true;
    let amountValue = amount.value*1;

    function encryptText() { // Функция вызова шифрования и обработки ошибок 
        let text = input.value;
        error.input(text);
        if (selectedType) {
            output.value = encrypt.encrypt(text, amountValue);
        } else {
            output.value = encrypt.decrypt(text, amountValue);
        }
    }

    type.addEventListener("click", () => { // Смена типа шифрования: шифровка или расшифровка
        selectedType = !selectedType;
        if (selectedType) {
            type.value = 'шифровка';
        } else {
            type.value = 'расшифровка';
        }
        encryptText();
    });

    amount.addEventListener("input", () => { // Введение количества сдвигов
        if (error.amount(amount.value*1)) {
            amountValue = amount.value*1;
            encryptText();
        } else {
            amount.value = "";
        }
    });

    input.addEventListener("input", () => { // Реактивный отклик на введение текста
        encryptText();
    });
}