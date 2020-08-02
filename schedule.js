var days = {"อาทิตย์":[""], 
"จันทร์":["01418497 - 60 Seminar"],
"อังคาร":["01418442 - 60 WebTech"], 
"พุธ":["01418341 - 60 IP", "01418331 - 60 OS", "01418321 - 60 SA"],
"พฤหัสบดี":["01418471 - 60 SE", "01175117 - 59 Archery"],
"ศุกร์":["01418341 - 60 IP", "01418331 - 60 OS"],
"เสาร์":[""]}

var subjects = {"01418497 - 60 Seminar":["Sec. 5", "ชาคริต,ศิริกร","เวลา: 8:00-11:00"],
"01418442 - 60 WebTech":["Sec. 1", "สุขุมาล,ศรชัย", " Lecture เวลา: 8:00-10:00", "Sec. 11", "สุขุมาล,ศรชัย", "Lab เวลา: 12:30-14:30"],
"01418341 - 60 IP":["Sec. 1", "นวลวรรณ", "เวลา 10:00-11.30"],
"01418331 - 60 OS":["Sec. 1", "ศิริกร", "เวลา 12:00-14:00"],
"01418321 - 60 SA":["Sec. 1", "สมโชค","Lecture เวลา 14:00-16:00" , "Sec. 11", "สมโชค", "เวลา 16:00-18:00"],
"01418471 - 60 SE":["Sec. 11", "อุสา", "Lab เวลา 8:00 - 10:00", "Sec. 1", "อุสา", "เวลา 11.00-13.00"],
"01175117 - 59 Archery":["Sec 14.", "ณชนก", "เวลา 16:30-18:30"]}

//Days
function showmon(){
  document.getElementById("day").innerHTML = "01418497 - 60 Seminar"
}

function showtue(){
  document.getElementById("day").innerHTML = "01418442 - 60 WebTech"
}

function showwed(){
  document.getElementById("day").innerHTML = "01418341 - 60 IP , 01418331 - 60 OS, 01418321 - 60 SA"
}

function showthu(){
  document.getElementById("day").innerHTML = "01418471 - 60 SE, 01175117 - 59 Archery"
}

function showfri(){
  document.getElementById("day").innerHTML = "01418341 - 60 IP, 01418331 - 60 OS"
}

//Subjects
function showsem(){
  document.getElementById("sub").innerHTML = "Sec. 5, ชาคริต,ศิริกร, เวลา: 8:00-11:00"
}

function showwebtech(){
  document.getElementById("sub").innerHTML = "Sec. 1, สุขุมาล,ศรชัย,  Lecture เวลา: 8:00-10:00, Sec. 11, สุขุมาล,ศรชัย, Lab เวลา: 12:30-14:30"
}

function showip(){
  document.getElementById("sub").innerHTML = "Sec. 1, นวลวรรณ, เวลา 10:00-11.30"
}

function showos(){
  document.getElementById("sub").innerHTML = "Sec. 1, ศิริกร, เวลา 12:00-14:00"
}

function showsa(){
  document.getElementById("sub").innerHTML = "Sec. 1, สมโชค, Lecture เวลา 14:00-16:00, Sec. 11, สมโชค, เวลา 16:00-18:00"
}

function showse(){
  document.getElementById("sub").innerHTML = "Sec. 11, อุสา, Lab เวลา 8:00 - 10:00, Sec. 1, อุสา, เวลา 11.00-13.00"
}

function showarchery(){
  document.getElementById("sub").innerHTML = "Sec. 14, ณชนก, เวลา 16:30-18:30"
}
