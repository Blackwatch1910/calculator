function dis(val) {
    document.getElementById('viewArea').value+=val;
}

function solve() {
    var x = document.getElementById('viewArea').value
    var y = eval(x)
    document.getElementById('viewArea').value = y
}

function clr() {
    document.getElementById('viewArea').value = ""
}