$(document).ready(function(){
  
  // slider conf and init
  $('.slider').slider({
    'indicators':true,
    'height':500,
  });

  //entore card as a tag 
  // $(".card").click(function() {
  //   window.location = $(this).find("a").attr("href"); 
  //   return false;
  // });
  
  //overlay for better visibility of random texts on random colorful images
  $.each( $(".blur-title-overlay"), function( index, value ){
    
    //get the dynamic values
    var textWidth = $(value).next().css('width');
    var imageURL = $(value).prev().attr('src');
    
    //set the dynamic values
    $(value).css('width',textWidth);
    $(value).css('background-image','url("' + imageURL + '") ');

  });

  $('.dropdown-button').dropdown({
    inDuration: 600,
    constrainWidth:false,
    outDuration: 400,
    hover: true, // Activate on hover
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right' // Displays dropdown with edge aligned to the left of button
  }
);
});