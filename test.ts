function putNameIn() {
    const x = (document.getElementById("getName") as HTMLInputElement).value;
    document.getElementById("username").innerText = x;
}
function putFromNameIn() {
    const x = (document.getElementById("inputFromName") as HTMLInputElement).value;
    document.getElementById("fromName").innerText = x;
}
function goodLuckHand() {
    (document.getElementById("getName") as HTMLInputElement).value = "幹案三小ㄛ";
    (document.getElementById("inputFromName") as HTMLInputElement).value = "自己想很難??";
}
