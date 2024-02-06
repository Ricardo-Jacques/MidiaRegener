menu_mobile = document.querySelector('.icone-menu');
nav = document.getElementsByTagName('nav')[0];
a = document.querySelectorAll(".link_cabecalho");
menu_mobile.addEventListener("click", function() {
    if (nav.classList.length === 0) {
        nav.classList.add("mobile");
        menu_mobile.src = "img/x_iconcinza.png";
        for (var i = 0; i < a.length; i++)  {
            a[i].classList.remove("link_cabecalho");
            a[i].classList.add("mobile");
        }
    } else {
        nav.classList.remove("mobile");
        menu_mobile.src = "img/menu_iconcinza.png"
        for (var i = 0; i < a.length; i++)  {
            a[i].classList.remove("mobile");
            a[i].classList.add("link_cabecalho");
        }
    }
});