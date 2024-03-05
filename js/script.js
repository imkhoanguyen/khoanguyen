function setActiveLink() {
    var url = window.location.href;
    var links = document.querySelectorAll(".nav-link.text-color");

    links.forEach(function (link) {
        link.classList.remove("active");
    });


    links.forEach(function (link) {
        if (link.href.toLocaleLowerCase() === url.toLocaleLowerCase()) {
            link.classList.add("active");
        }
    });
}

window.onload = setActiveLink;