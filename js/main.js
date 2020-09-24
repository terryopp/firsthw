window.onload = function() {
    let input = document.getElementById('text');
    let output = document.getElementById('output');

    let encrypt = new Cipher();

    input.addEventListener("input", () => {
        let text = input.value;
        output.value = encrypt.encrypt(text, 1);
    });
}