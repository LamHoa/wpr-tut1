let amountInput = document.getElementById('amount');
let fromInput = document.getElementById('from');
let toInput = document.getElementById('to');
let result = document.getElementById('result')

function convert(){
    event.preventDefault();
    let amount = parseFloat(amountInput.value);
    let from = fromInput.value;
    let to = toInput.value;
    if (from == 'VND' && to == 'USD') {
        result.innerText = amount / 22.622 + ' USD';
    } else if (from == 'USD' && to == 'VND') {
        result.innerText = amount * 22.622 + ' VND';
    } else {
        document.write('Wrong');
    }
}