// Toggle Am or Pm

let amorpm = true;

document.getElementById('pa').addEventListener('click', function () {
    if (amorpm) {
        this.innerText = "PM";
        amorpm = false;
    }
    else {
        this.innerText = "AM";
        amorpm = true;
    }
});


// Adding New Task 


document.getElementById('btnAdd').addEventListener('click', () => {
    if (checkInputs()) {
        li = document.createElement("li");
        let task = document.getElementById('task').value;
        let hours = document.getElementById('hours').value;
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = document.getElementById('minutes').value;
        let aorp = document.getElementById('pa').innerText;

        li.innerHTML = `<div class="check-box"><i class="far fa-square" onclick="addRight(this)"></i></div><div class="fixed">${task}</div><div class="time">${hours}:${minutes} ${aorp}</div><i class="far fa-times-circle" onclick="out(this)"></i>`;
        holder = document.getElementsByClassName("holder")[0];
        holder.appendChild(li);
    }
});


// Checking user inputs means is empty  or not


function checkInputs() {
    if (document.getElementById('task').value == "")
        return false;
    else if (document.getElementById('hours').value == "")
        return false;
    else if (document.getElementById('minutes').value == "")
        return false;
    else
        return true;
}



// Adding completed task into the right column


function addRight(event) {
    const rightHolder = document.getElementsByClassName("rightHolder")[0];
    const li = document.createElement("li");
    const date = formatAMPM(new Date());

    li.innerHTML = `<div class="check-box"><i class="fas fa-square"></i></div><div class="fixed">${event.parentElement.parentElement.querySelector(".fixed").innerText}</div><div class="time">${date}</div>`;
    rightHolder.appendChild(li);
    holder = document.getElementsByClassName("holder")[0];
    event.classList.replace("far", "fas");

    // Timeout to show check box is filled

    setTimeout(() => {
        event.parentElement.parentElement.remove();
    }, 200);
}


// Formatting date 


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


// Removing the li element when clicked on cross icon


function out(event) {
    event.parentElement.remove();
}


// Reseting all tasks


document.getElementById('reset').addEventListener('click', function () {
    document.getElementsByClassName('holder')[0].innerHTML = "";
    document.getElementsByClassName('rightHolder')[0].innerHTML = "";


    // Reseting all inputs

    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++)
        inputs[i].value = "";
});


// Clearing all completed tasks


document.getElementById('clear').addEventListener('click', function () {
    document.getElementsByClassName('rightHolder')[0].innerHTML = "";
});






