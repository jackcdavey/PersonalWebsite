//Navbar Listener
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("contentSection").style.filter = "blur(7px)";
  document.getElementById("navOpen").style.visibility = "hidden";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
    document.getElementById("contentSection").style.filter = "blur(0px)";
  document.getElementById("navOpen").style.visibility = "visible";

}

 $("#aboutMeNav").click(function() {
    $('html,body').animate({
      scrollTop: $(".about-section").offset().top},
      'slow');
    closeNav();
  });

 $("#projectsNav").click(function() {
    $('html,body').animate({
      scrollTop: $(".project-section").offset().top},
      'slow');
    closeNav();
  });

  $("#contactNav").click(function() {
    $('html,body').animate({
      scrollTop: $(".contact-section").offset().top},
      'slow');
    closeNav();
  });

//end navbar


 //Force hero to fill screen size
 $(document).ready(function(){
  var resizeHero = function(){
    var hero = $("#hero-section"), window1 = $(window);
    hero.css({
      "width": window1.width(),
      "height": window1.height()
    });
  };

  resizeHero();
  $(window).resize(function(){
    resizeHero();    
  });
});
 //End hero resizing

$(".alert button.close").click(function (e) {
    $(this).parent().slideUp('slow');
});

 //Info text animation
 var textWrapper = document.querySelector('.info');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 anime.timeline({loop: false})
 .add({
  targets: '.info .letter',
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1500,
  delay: (el, i) => 500 + 30 * i
});
  //End info text animation

  //Arrow scroll button listener
  $(".arrow").click(function() {
    $('html,body').animate({
      scrollTop: $(".about-section").offset().top},
      'slow');
  });
  //End scroll listener