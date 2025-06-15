document.addEventListener("DOMContentLoaded", () => {
    const Loader = document.querySelector('.loader');
    const Spinner = document.querySelector('spinner');

    Loader.style.display = "none";
    Spinner.style.display = "none";
});

const $ = id => document.getElementById(id);
const MenuTitle = $("menu-title"),
      MenuIcon = $("menu-icon"),
      DropDown = $("drop-down-menu"),
      CrossIcon = $("cross-icon");

const showMenu = () => {
  MenuTitle.style.display = "none";
  DropDown.style.display = "flex";
  MenuIcon.style.translate = "-95px 0px";
  MenuIcon.style.animation = "fadeOut 0.5s linear";
  
  setTimeout(() => {
    MenuIcon.style.display = "none";
    CrossIcon.style.display = "flex";
  }, 500);
};

const hideMenu = () => {
  CrossIcon.style.display = "none";
  DropDown.style.display = "none";
  MenuTitle.style.display = "flex";
  MenuIcon.style.translate = "0 0";
  MenuIcon.style.display = "flex";
  MenuIcon.style.animation = "none";
};

MenuTitle.addEventListener("click", showMenu);
MenuIcon.addEventListener("click", showMenu);
CrossIcon.addEventListener("click", hideMenu);
