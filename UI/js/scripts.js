function Check_admin(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( email == "admin@eoic.com" && password == "admin"){
alert ("Login successfully");
window.location = "admin.html"; // Redirecting to other page.