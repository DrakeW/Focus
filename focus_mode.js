var top_bar = document.getElementById('masthead-positioner');
var watch7_container = document.getElementById('watch7-container');
var footer_container = document.getElementById('footer-container');

var body_container = document.getElementById('body-container');

console.log('focus mode triggered');
top_bar.hidden = true;
watch7_container.hidden = true;
footer_container.hidden = true;

body_container.setAttribute("style", "padding-bottom: 0px;background-color: black");
