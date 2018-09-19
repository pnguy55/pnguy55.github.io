function menuToggleOn(){
  
  var menu = document.getElementById('burger');
  var button = document.getElementById('clicky');
  var menuPane = document.getElementById('mobile-nav');
  var menuPaneList = document.getElementById('mobile-menu');
 
  function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            menuPaneList.classList.add('mobile-menu-hide');
        }
       
    }, 650);
  }
  

  
  if(menu.classList.contains('menuToggle')){
    button.classList.remove('animButton');
    button.classList.add('anim2Button');
    menu.classList.remove('menuToggle');
    menu.classList.add('menuToggle2');
    menuPane.classList.remove('mobile-nav');  
    menuPaneList.classList.remove('menuAnim');
    menuPaneList.classList.add('menuAnim2');
    stateChange(-1);
  }
  
  else{
    button.classList.remove('anim2Button');
    button.classList.add('animButton');
    menu.classList.remove('menuToggle2');
    menu.classList.add('menuToggle');
    menuPane.classList.remove('mobile-nav-gone');
    menuPane.classList.add('mobile-nav');
    menuPaneList.classList.add('menuAnim');
    menuPaneList.classList.remove('menuAnim2');
    menuPaneList.classList.remove('mobile-menu-hide');
    
  }
  
  
}

function goToPortfolio(){
  var selfie = document.getElementById('selfie-box');
  var about = document.getElementById('about-me');
  var portfolio = document.getElementById('portfolio');
  var skills = document.getElementById('skills');
  var portfolioCopy = document.getElementById('portfolio-copy');
  var aside = document.getElementById('aside');
  
  selfie.classList.add('hide');
  aside.classList.add('hide');
  about.classList.add('hide');
  
  portfolio.classList.remove('hide');
  portfolioCopy.classList.remove('hide');
  
}

function goToAboutMe(){
  var selfie = document.getElementById('selfie-box');
  var about = document.getElementById('about-me');
  var portfolio = document.getElementById('portfolio');
  var skills = document.getElementById('skills');
  var portfolioCopy = document.getElementById('portfolio-copy');
  
  portfolio.classList.add('hide');
  portfolioCopy.classList.add('hide');
  selfie.classList.remove('hide');
  skills.classList.remove('hide');
  about.classList.remove('hide');
}