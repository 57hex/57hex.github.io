function putNameIn() {
    var x = document.getElementById("getName").value;
    document.getElementById("username").innerText = x;
}
function putFromNameIn() {
    var x = document.getElementById("inputFromName").value;
    document.getElementById("fromName").innerText = x;
}
function goodLuckHand() {
    document.getElementById("getName").value = "？？？";
    document.getElementById("inputFromName").value = "??";
}
