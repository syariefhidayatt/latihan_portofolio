$('.page-scroll').on('click', function(e){

  // ambil isi href
  var tujuan = $(this).attr('href');

  //tangkap isi element
  var elementTujuan = $(tujuan);

  //scroll
  $('html,body').animate({
    scrollTop: elementTujuan.offset().top -50
  },1250,'easeOutExpo');    

  e.preventDefault();
});
