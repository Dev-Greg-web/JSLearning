// let x = 1
// x = Boolean(x)
// x = Number(x)
// x = String(x)

let button = document.getElementById('myButton').onclick = function () {
    let age = document.getElementById('myInput').value;
    age = Number(age)
    let h1 = document.getElementById("myH1").textContent = `Hello, You're ${age}`
}