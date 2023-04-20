const hor = document.getElementById('hour');
const min = document.getElementById('minutes');
const sec = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sc = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (mn < 10) mn = '0' + mn;
    if (sc < 10) sc = '0' + sc;

    hor.textContent = hr;
    min.textContent = mn;
    sec.textContent = sc;

})