function openAboutPage() {
  window.open("about.html", "_self");

}


function openHomePage() {
  window.open("index.html", "_self");
}

function openResumePage() {
  window.open("Resume.html", "_self");
}

function openContactPage(){
  window.open("contact.html","_self")
}

function openServicesPage(){
  window.open("services.html","_self")
}

function openPortfolioPage(){
  window.open("portfolio.html","_self")
}

var i = 0;
var txt = 'I am an Android Application Developer obsessed with advancing the Android Ecosystem by increasing App Maintainability, UX Wow Factors and Faster App Deployment.';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("AboutRunningText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

