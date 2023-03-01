window.onload = choosePic;

function choosePic() {
     document.getElementById("fukinimg").src = "public/hero/" + Math.floor(Math.random() * 2) +".png";
}