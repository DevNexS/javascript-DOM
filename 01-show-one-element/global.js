window.addEventListener("load", function(){

var moreText = document.getElementById("more_text_content");
var moreLink = document.getElementById("more_text_link")

moreLink.addEventListener('click', function(){
    moreText.style.display = 'initial';
    moreLink.style.display = 'none';
  });
});