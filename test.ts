function putNameIn() {
    const x = (document.getElementById("getName") as HTMLInputElement).value;
    document.getElementById("username").innerText = x;
}
function putFromNameIn() {
    const x = (document.getElementById("inputFromName") as HTMLInputElement).value;
    document.getElementById("fromName").innerText = x;
}
