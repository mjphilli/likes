function update(id) {
    var count = document.querySelector("#" + id).innerText.split(" ")[0];
    document.querySelector("#" + id).innerText = ++count + " like(s)";
}