$(function() {

  // Init vimeo
  // var showreel = new Vimeo.Player('vimeo', {
  //   background: 1
  // });
  // showreel.on('play', function() {
  //   console.log('played the player 2.0 video!');
  // });

  //change title text on home page
  $('.frith a').hover(
    function() {
      $('.page-home-header').text($(this).data('title'));
    }, function() {
      $('.page-home-header').text("Studio Frith");
    }
  );

  // show/hide menu overlay on mobile
  var overlay = $('.menu-overlay');

  $('.menu-link').click(function() {
    console.log('click');

    if (overlay.is(':visible')) {
      overlay.hide();
    } else {
      overlay.show();
    }

    return false;
  });

  $('.frith a').click(function() {
    window.location.href = $(this).attr('href');
  });

  $('.movie-small').click(function() {
    $('.movie-wrapper').addClass('is--reveal-video');
    $('video.work-video').get(0).currentTime = 0;
    $('video.work-video').get(0).play();
  });

  $('video.work-video').bind('webkitendfullscreen', function() {
    $('video.work-video, h1').hide();
    window.location.href = '/menu/';
  });

  $('video.work-video').on('ended',function(){
    window.location.href = '/menu/';
  });

});
