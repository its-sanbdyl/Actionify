
const MenuTitle = document.getElementById("menu-title");
const MenuIcon = document.getElementById("menu-icon");
const DropDownContainer = document.getElementById("drop-down-menu");
const CrossIcon = document.getElementById("cross-icon");


MenuTitle.addEventListener(("click"), (e) => {
    e.target.style.display ="none";
    DropDownContainer.style.display = "flex";
    MenuIcon.style.translate = "-95px 0px";
    MenuIcon.style.animation= "fadeOut 0.5s 1 linear";
    setTimeout(() => {MenuIcon.style.display = "none";
                      CrossIcon.style.display = "flex";
    }, 500);
});

MenuIcon.addEventListener(("click"), (e) => {
    MenuTitle.style.display ="none";
    DropDownContainer.style.display = "flex";
    MenuIcon.style.translate = "-95px";
    MenuIcon.style.animation= "fadeOut 0.5s 1 linear";
    setTimeout(() => {MenuIcon.style.display = "none";
                      CrossIcon.style.display = "block";
    }, 500);
});

CrossIcon.addEventListener(("click"), (e) => {
    CrossIcon.style.display = "none";
    DropDownContainer.style.display = "none";
    MenuTitle.style.display = "flex"
    MenuIcon.style.translate = "0px 0px";
    MenuIcon.style.display = "flex";
});