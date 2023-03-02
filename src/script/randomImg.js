window.onload = choosePic;

var dir = "public/hero/";

function choosePic() {
     document.getElementById("fukinimg").src = dir + Math.floor(Math.random() * 2) +".png";
}
