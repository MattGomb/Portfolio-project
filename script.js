function toggleFunction() {
    var toggler = document.getElementById("toggleMenu");
    var disable = document.getElementById("disable");
    if(toggler.style.display === "block") {
        toggler.style.display = "none";
    } else {
        disable.style.display = "block";
    };
}