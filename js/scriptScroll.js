$(document).ready(function(){
  $('.mainMenuLink, .mainMenuLinkSm, .footerMenu, .checkAva').on('click','a[href^="#"]',function(event){
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 30;
    //change this number to create the additional off set        
    var customoffset = 75
    $('html, body').animate({scrollTop:target_offset - customoffset}, 1200);
});
});
