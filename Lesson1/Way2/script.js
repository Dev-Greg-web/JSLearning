// 1. Easy way
// 2. Proffesional Way

// 2.

let username;
let button = document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('myText').value;
    h1 = document.getElementById('myH1').textContent = `Hello ${username}`
}