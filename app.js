function getPhoneQuantity(isIncrease, price, product) {
    const phoneInput = document.getElementById(product + '-input');
    let phoneInputValue = parseInt(phoneInput.value);
    if (isIncrease == true) {
        phoneInputValue = phoneInputValue + 1;
    }
    else if (phoneInputValue > 0) {
        phoneInputValue = phoneInputValue - 1;
    }
    phoneInput.value = phoneInputValue;

    const phonePrice = document.getElementById(product + "-price");
    phonePrice.innerText = phoneInputValue * price;
    getTotal()
}

function getTotal() {
    const total = document.getElementById("total-price");
    const phoneInput = document.getElementById('phone-input').value * 1219;
    const caseInput = document.getElementById('case-input').value * 59;
    total.innerText = phoneInput + caseInput;

    const tax = document.getElementById("tax-amount");
    tax.innerText = total.innerText / 10;

    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = parseInt(total.innerText) + parseInt(tax.innerText)
}





document.getElementById('phone-btn-plus').addEventListener("click", function () {
    getPhoneQuantity(true, 1219, "phone")
})

document.getElementById('phone-btn-minus').addEventListener("click", function () {
    getPhoneQuantity(false, 1219, "phone")
})

document.getElementById('case-btn-plus').addEventListener("click", function () {
    getPhoneQuantity(true, 59, "case")
})

document.getElementById('case-btn-minus').addEventListener("click", function () {
    getPhoneQuantity(false, 59, "case")
})