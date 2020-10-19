/*global prompt, alert, $, window*/



function Pass() {
    "use strict";
    var password = "123456",
        Input = prompt("You Don\'t have access to contacts. Please Enter password. * You will know it if you are geek ;)");
    if (Input === password) {
        alert("You Got the password right, but sadly there are no Contacts :D");
    } else {
        alert("Wrong Password!");
    }
}

$(function () {
    "use strict";
    // Adjust header Height
    var winH = $(window).height(),
        navH = $('.navbar').innerHeight();
    $('.head').height(winH - navH);
    $('#video').height(winH);
});