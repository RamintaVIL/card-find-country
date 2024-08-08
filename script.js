const searchInput = document.getElementById("search");
const list = document.querySelector("#list");
const btn = document.querySelector(".btn");
const enter = document.querySelector(".enter");

btn.addEventListener("click", () => {
    //issitraukiu reiksme is input
    const value = enter.value
    if (value.trim() === '') {
        alert('Įveskita šalį')
        return
    }
    else {
        list.append(Object.assign(document.createElement('li'), { textContent: value }))
    }
});

searchInput.addEventListener("keyup", search)
function search() {
    const searchInputValue = searchInput.value
    const listElements = document.getElementsByTagName('li');
    for (let i = 0; i < listElements.length; i++) {
        if (listElements[i].innerHTML.toLowerCase().includes(searchInputValue) ||
            listElements[i].innerHTML.toUpperCase().includes(searchInputValue)) {
            listElements[i].style.display = ""
        }
        else {
            listElements[i].style.display = "none"
        }
    }
}





