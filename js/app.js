var inputText = document.getElementById('input');
var checkBtn = document.getElementById('check-btn');
var paraText = document.getElementById('para');
var alertAreaMain = document.getElementById('alert-area-main');
alertAreaMain.style.display = 'none';

checkBtn.addEventListener('click', function () {
    if (inputText.value == '') {
        paraText.innerHTML = 'Kicu likhun!!!'
        alertAreaMain.style.display = 'block';
    } else if (inputText.value > 5) {
        paraText.innerHTML = 'Apni sudhumatro 5 ta product nite parben!!!!!!';
        alertAreaMain.style.display = 'block';
    } else if (inputText.value < 0) {
        paraText.innerHTML = 'invlid number!!!!!!';
        alertAreaMain.style.display = 'block';
    } else {
        paraText.innerHTML = 'Congratulations!!!';
        alertAreaMain.style.display = 'block';
    }

});

var okBtn = document.getElementById('ok-btn');
okBtn.addEventListener('click', function () {
    alertAreaMain.style.display = 'none';

});