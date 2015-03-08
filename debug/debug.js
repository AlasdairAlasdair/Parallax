var debugInput = document.querySelector("#debug-checkbox");
function updateDebugState() {
    document.body.classList.toggle('debug-on', debugInput.checked);
}
debugInput.addEventListener("click", updateDebugState);
updateDebugState();

var coloursInput = document.querySelector("#colours-checkbox");
function updateColoursState() {
    document.body.classList.toggle('colours-off', coloursInput.checked);
}
coloursInput.addEventListener("click", updateColoursState);
updateColoursState();