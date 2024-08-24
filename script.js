function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    
    // This will replace the result of any mathematical operation with "I love you"
    if (expression.match(/[0-9]+[+\-*/][0-9]+/)) {
        // Ganti nilai display
        display.value = 'i love you';
    
        // Buat elemen gambar baru
        const image = document.createElement("img");
    
        // Atur sumber gambar
        image.src = 'image.png';
        setTimeout(() => {
            image.style.opacity = 10;
            image.style.transform = 'scale(1)';
        }, 10);
        // Tambahkan gambar ke body
        document.body.appendChild(image);
    }
     else {
        try {
            display.value = eval(expression);
        } catch {
            display.value = 'Error';
        }
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}