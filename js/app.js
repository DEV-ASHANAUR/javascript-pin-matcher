function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('error', pin);
        return getPin();
    }
}
// function genaratePin
function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
//key-pad
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    // console.log(number);
    // if (number == '<') {
    //     console.log('yes');
    // }
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        } else if (number == '<') {
            let previousNumber = calcInput.value;
            calcInput.value = previousNumber.substring(0, previousNumber.length - 1);
        } 
    }else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
//verify pin
function verifyPin() {
    const typedNumber = document.getElementById('typed-number').value;
    const displayPin = document.getElementById('display-pin').value;
    const successMessage = document.getElementById('success');
    const errorMessage = document.getElementById('error');
    if (typedNumber == displayPin) {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}

