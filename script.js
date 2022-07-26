setInterval(() => {
    let d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime
    srotation = 6 * stime

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000)
setInterval(() => {
    const time = document.querySelector("#time");
    let dd = new Date();
    let hour = dd.getHours();
    let minute = dd.getMinutes();
    let second = dd.getSeconds();
    let daynight = "AM";
    if (hour > 12) {
        hour = hour - 12;
        daynight = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    time.textContent = hour + " : " + minute + " : " + second + " " + daynight;
})