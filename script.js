function update(id) {
    var count = document.getElementById(id).innerText.split(" ")[0];
    document.getElementById(id).innerText = ++count + " like(s)";
}