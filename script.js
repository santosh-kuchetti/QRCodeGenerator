const wrapper = document.querySelector('.wrapper'),
    qrInput = wrapper.querySelector('.form input'),
    generateBtn = wrapper.querySelector('.form button'),
    qrImg = wrapper.querySelector('.qr-code img');


generateBtn.addEventListener('click', () => {

    let qrValue = qrInput.value;
    if (!qrValue) return;  //if input is empty return from there
    generateBtn.innerText = 'Generating QR Code...';

    // getting the QR code of user enters value using qrImg
    // api and passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    qrImg.addEventListener("load", () => {   // once the QR Code img loaded
        wrapper.classList.add("active");
        generateBtn.innerText = 'Generate QR Code'


    });    
});

qrInput.addEventListener("keyup", () => {
        if (!qrInput.value) {
            wrapper.classList.remove("active");
        }
    })