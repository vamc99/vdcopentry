function initMenu(){
    var menuNameRef = JSON.parse(sessionStorage.menuNameRefList);
    var menuLinkRef = JSON.parse(sessionStorage.menuLinkRefList);
    var ul = document.createElement("ul");
    ul.classList.add("navbar-nav");
    for(var index in menuNameRef) {
        //console.log(menuListRef[index]);
        //create li tag
        var li = document.createElement("li");
        li.classList.add("nav-item");
        var a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = menuLinkRef[index];
        a.innerText = menuNameRef[index];
        li.appendChild(a);
        ul.appendChild(li);
    }
    document.getElementById("navbarNavDropdown").appendChild(ul);
}
