var beginTime = document.getElementById("begin-time");

if(beginTime != null){
  setMinTime(beginTime);
}

var endTime = document.getElementById("end-time");

if(endTime != null){
  setMinTime(endTime);
}

function setMinTime(time){
  time.setAttribute("min", new Date().toISOString().slice(0,16));
}

var cancelBooking = document.getElementById("cancelBooking");

if(cancelBooking != null){
  cancelBooking.addEventListener("click", cancel);
}

function cancel(){
  document.getElementById("booking-form").reset();
}

var adminContent = document.getElementById("adminContent");

if(adminContent != null){
  loadUserPage();
}

function loadUserPage(){
  fetch("users.html")
    .then(data => data.text())
    .then(html => document.getElementById("adminContent").innerHtml = html);
}
