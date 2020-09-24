window.onload = function() {
    let input = document.getElementById('text');
    let output = document.getElementById('output');
    let type = document.getElementById('type');

    let encrypt = new Cipher();

    let selectedType = true;

    type.addEventListener("click", () => {
        selectedType = !selectedType;
        if (selectedType) {
            type.value = 'Encrypt';
        } else {
            type.value = 'Decrypt';
        }
    });


    input.addEventListener("input", () => {
        let text = input.value;
        if (selectedType) {
            output.value = encrypt.encrypt(text, 1);
        } else {
            output.value = encrypt.decrypt(text, 1);
        }
    });  
}