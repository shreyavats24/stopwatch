var start = document.getElementById("startTime");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var lap = document.getElementById("LapTime");
var time = document.getElementById("time");
var list = document.getElementById("lapsList");
var resume = document.getElementById("resume");
var hr = 0, min = 0, milisec = 0, sec = 0;
var check = 0;
var stop, ref, li;
var count = 1;
start.addEventListener("click", function () {
    if (check == 0) {
        check = 1;
        start.style.display = "none";
        lap.style.display = "inline";
        reset.style.display = "none";
        stop.style.display = "inline";
        ref = setInterval(calculateTime, 50);
    }
})
stop.addEventListener("click", function () {
    stop.style.display = "none";
    lap.style.display = "none";
    reset.style.display = "inline";
    resume.style.display = "inline";
    check = 0;
    clearInterval(ref);

})
resume.addEventListener("click", function () {
    stop.style.display = "inline";
    resume.style.display = "none";
    lap.style.display = "inline";
    reset.style.display = "none";
    check = 1;
    ref = setInterval(calculateTime, 50);
})

lap.addEventListener("click", function () {
    if (check == 1) {
        li = document.createElement("li");
        li.id = "listPosition";
        var span = document.createElement("span");
        span.id = "timeSide";
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (milisec < 10) {
            milisec = "0" + milisec;
        }
        span.innerHTML = hr + ":" + min + ":" + sec + ":" + milisec;
        hr = parseInt(hr);
        min = parseInt(min);
        sec = parseInt(sec);
        milisec = parseInt(milisec);
        li.innerText = "Lap " + count;
        li.appendChild(span);
        count = parseInt(count);
        count++;
        list.appendChild(li);
    }

})
reset.addEventListener("click", function () {
    // alert("inside resest");
    sec = 0; hr = 0; min = 0; milisec = 0;
    time.innerHTML = "00:00:00:00";
    list.innerHTML = "";
    count = 1;
})
const calculateTime = function () {
    if (check == 1) {
        milisec = milisec + 1;
        if (milisec == 100) {
            milisec = 0;
            sec = sec + 1;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (hr == 24) {
            hr = 0;
            min = 0;
            sec = 0;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (milisec < 10) {
            milisec = "0" + milisec;
        }
        time.innerHTML = hr + ":" + min + ":" + sec + ":" + milisec;
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        milisec = parseInt(milisec);
    }
}
