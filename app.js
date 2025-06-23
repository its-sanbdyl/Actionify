//Loader When DOM Content Not Loaded
document.addEventListener("DOMContentLoaded", () => {
    const Loader = document.querySelector('.loader');
    const Spinner = document.querySelector('spinner');

    Loader.style.display = "none";
    Spinner.style.display = "none";
});

//Height of the Hero
document.querySelector('.hero').style.height = window.innerHeight + "px";


//Menu of the Navbar
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

//Dropdown of Service in the Menu
const Service = document.querySelector('.dd-service');
const ServiceDropDown = document.querySelector('.service-dropdown');
const ServiceDownArrow = document.querySelector('.service-down-arrow');

Service.addEventListener("click", () => {
  if(ServiceDropDown.style.display === "none"){
    ServiceDownArrow.style.transform = "rotate(180deg)";
    ServiceDownArrow.style.transition = "0.5s ease";
    ServiceDropDown.style.display = "flex";
  }
  else{
    ServiceDownArrow.style.transform = "rotate(0deg)";
    ServiceDropDown.style.display = "none";
  }
});

//Current Year for footer 
document.getElementById("current-year").textContent = new Date().getFullYear();

//FAQ Hide/Show Icon
const FAQPlusIcons = Array.from({ length: 5 }, (_, i) => $(`faq-plus-${i + 1}`));
const FAQMinusIcons = Array.from({ length: 5 }, (_, i) => $(`faq-minus-${i + 1}`));
const FAQAnswers = Array.from({ length: 5 }, (_, i) => $(`faq-answer-${i + 1}`));

FAQPlusIcons.forEach((plusIcon, i) => {
  plusIcon.addEventListener("click", () => {
    plusIcon.style.display = "none";
    FAQMinusIcons[i].style.display = "block";
    FAQAnswers[i].style.display = "block";
  });
});

FAQMinusIcons.forEach((minusIcon, i) => {
  minusIcon.addEventListener("click", () => {
    minusIcon.style.display = "none";
    FAQPlusIcons[i].style.display = "block";
    FAQAnswers[i].style.display = "none";
  });
});
