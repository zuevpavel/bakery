$(function(){

  $('.center').slick ({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    // fade: true
    responsive: [
      {
        breakpoint: 768,
          settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
          settings: {
          slidesToShow: 1
        }
      }
    ]
    
  });


  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('active');
  });


  // $('.center').slick({
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 2,
  // });


  // $('.center').slick({
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 1440,
  //       settings: {
  //         unslick
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     },
      
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });


  
});