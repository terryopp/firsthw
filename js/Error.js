function Error() {

    let error = document.getElementById('error');

    this.amount = function (value) {
        if (!isNaN(value) && value > 0 && value < 26 && Number.isInteger(value)) {
            error.innerHTML = "";
            return true;
        } else {
            error.innerHTML = "Пожалуйста, введите целое число от 1 до 26";
            return false;
        }
    } 

    this.input = function (text) {
        let letter = text[text.length - 1];
        if (letter.match(/^[а-яё]*$/i)) {
            error.innerHTML = "Учтите, что шифрование не поддерживает русский язык";
        } else {
            error.innerHTML = "";
        }
    }
}