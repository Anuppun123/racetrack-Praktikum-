$(window).ready(function(){
      $('#toparticle-01').addClass('visible');
      $('#toparticle-02').addClass('visible');
      $('#toparticle-03').addClass('visible');
      $('#toparticle-04').addClass('visible');
      $('#toparticle-05').addClass('visible');
      $('.video-container-wrapper').addClass('visible');
      $('#heading').addClass('visible');
      $('.rtc-logo').addClass('visible');
      $('.rennfahrer-programm-box-left').addClass('visible');
      $('.rennfahrer-programm-box-right').addClass('visible');
      $('.kontakt h5').addClass('visible');
      $('.kontakt p').addClass('visible');
      $('.kontakt div').addClass('visible');
      $('#footer-01').addClass('visible');
      $('#footer-02').addClass('visible');
      $('#footer-03').addClass('visible');
      $('#footer-clear').addClass('visible');
});

$(window).scroll(function(){
// To shrink the navbar when you scroll the page
  if ($(document).scrollTop() > 100){
      $('.logo img').addClass('shrink-img');
  }else{
      $('.logo img').removeClass('shrink-img')    
  }

// All other animations
  if($('#toparticle').visible(true) || $('#toparticle-1').visible(true) || $('#toparticle-2').visible(true) || $('#toparticle-3').visible(true)){
      $('#toparticle-01').addClass('visible');
      $('#toparticle-02').addClass('visible');
      $('#toparticle-03').addClass('visible');
  } else {
      $('#toparticle-01').removeClass('visible');
      $('#toparticle-02').removeClass('visible');
      $('#toparticle-03').removeClass('visible');     
  }


  if($('#ractrackcoach-app').visible(true) || $('.app-store').visible(true)){
    $('#toparticle-04').addClass('visible');
    $('#toparticle-05').addClass('visible');
  }else{
    $('#toparticle-04').removeClass('visible');
    $('#toparticle-05').removeClass('visible');     
  }

  if($('#video').visible(true)){
    $('.video-container-wrapper').addClass('visible');
  }else{
    $('.video-container-wrapper').removeClass('visible');   
  }

  if($('.rennfahrer-programm-box-left').visible(true) || $('#program-1').visible(true) || $('#program-2').visible(true)){
    $('#heading').addClass('visible');
    $('.rtc-logo').addClass('visible');
    $('.rennfahrer-programm-box-left').addClass('visible');
    $('.rennfahrer-programm-box-right').addClass('visible');
  }else {
    $('#heading').removeClass('visible');
    $('.rtc-logo').removeClass('visible');
    $('.rennfahrer-programm-box-left').removeClass('visible');
    $('.rennfahrer-programm-box-right').removeClass('visible');
  }
  if($('#development2').visible(true) || $('#program-3').visible(true) || $('#program-4').visible(true)){
    $('.rennfahrer-programm-box-right').addClass('visible');
  }else {

    $('.rennfahrer-programm-box-right').removeClass('visible');
  }


  if($('#kontakt').visible(true)){
    $('.kontakt h5').addClass('visible');
    $('.kontakt p').addClass('visible');
    $('.kontakt div').addClass('visible');
  }else{
    $('.kontakt h5').removeClass('visible');
    $('.kontakt p').removeClass('visible');
    $('.kontakt div').removeClass('visible');    
  }

  if($('.footer-container .wrapper').visible(true)){
    $('#footer-01').addClass('visible');
    $('#footer-02').addClass('visible');
    $('#footer-03').addClass('visible');
    $('#footer-clear').addClass('visible');
    } else {
    $('#footer-01').removeClass('visible');
    $('#footer-02').removeClass('visible');
    $('#footer-03').removeClass('visible');
    $('#footer-clear').removeClass('visible');      
}
});