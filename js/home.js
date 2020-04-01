
function initMenu(){
    var menuListRef = JSON.parse(sessionStorage.menuList);
    var ul = document.createElement("ul");
    ul.classList.add("navbar-nav");
    for(var index in menuListRef) {
        //console.log(menuListRef[index]);
        //create li tag
        var li = document.createElement("li");
        li.classList.add("nav-item");
        var a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = menuListRef[index];
        a.innerText = index;
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.getElementById("navbarNavDropdown").appendChild(ul);
}
