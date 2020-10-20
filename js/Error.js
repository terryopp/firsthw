function Error() { // Обработка ошибок 

    let error = document.getElementById('error'); // Вывод ошибок

    this.amount = function (value) { // Обработка количества сдвигов, выявление ошибок
        if (!isNaN(value) && value > 0 && value < 26 && Number.isInteger(value)) {
            error.innerHTML = "";
            return true;
        } else {
            error.innerHTML = "Пожалуйста, введите целое число от 1 до 26";
            return false;
        }
    } 

    this.input = function (text) { // Обработка введенного текста
        let letter = text[text.length - 1];
        try {
            if (letter.match(/^[а-яё]*$/i)) {
                error.innerHTML = "Учтите, что шифрование не поддерживает русский язык";
            } else {
                error.innerHTML = "";
            }
        } catch (e) {}
    }
}