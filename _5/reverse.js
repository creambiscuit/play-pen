var userInputOnInput;
var userInputOnBtn;
document.querySelector('.outputOnBtn').innerHTML = 'click on submit to see the text in reverse here';
document.querySelector('.userInput').addEventListener('input',function () {
    textReverseOnInput();
});
document.querySelector('.submitBtn').addEventListener('click', function () {
    textReverseOnBtn();
});

function textReverseOnInput() {
    var inputValue = document.querySelector('.userInput').value;
    userInputOnInput = inputValue.split('').reverse().join('');
    document.querySelector('.outputOnInput').innerHTML = userInputOnInput;
}

function textReverseOnBtn() {
    var inputValue = document.querySelector('.userInput').value;
    userInputOnBtn = inputValue.split('').reverse().join('');
    document.querySelector('.outputOnBtn').innerHTML = userInputOnBtn;
}
