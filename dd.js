function CheckAnswers() {
    var zero = document.getElementById("cero");
    var uno = document.getElementById("uno");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var ten = document.getElementById("ten");
    var eleven = document.getElementById("eleven");
    var twelve = document.getElementById("twelve");

    if (zero.options[zero.selectedIndex].value == 'c') {
        document.getElementById("imgcero").src = "images/banners/iconsarticles/check_16.png"
    } else {
        document.getElementById("imgcero").src = "images/banners/iconsarticles/incorrect_icon.png"
    }
}