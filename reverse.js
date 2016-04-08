var top_bar = document.getElementById('masthead-positioner');
var watch7_container = document.getElementById('watch7-container');
var footer_container = document.getElementById('footer-container');

var body_container = document.getElementById('body-container');

console.log('reverse triggered');
top_bar.hidden = false;
watch7_container.hidden = false;
footer_container.hidden = false;

body_container.setAttribute("style", "padding-bottom: 0px;background-color: #F1F1F1");
