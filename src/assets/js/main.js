window.onload = () => {
   navigationMobile.init();
};
let navigationMobile = {
  init:function (){
    this.toggleShow();
  },
  toggleShow:function (){
      const buttonBar = document.querySelector('.Navigation-item .button-bars');
      const listMenu  = document.querySelector('.Navigation-item .list-item-group');
      buttonBar.addEventListener('click', () => {
        listMenu.classList.toggle('active');
      })
  }
}

$(document).ready(function(){
  $('#buttonArrow.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    navText: [
      "<img src='./assets/images/Previous.png'>",
      "<img src='./assets/images/Next.png'>",
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$('#hasDots.owl-carousel').owlCarousel({
  loop:true,
  
  
  dots:true,
 
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$('#default.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  

 
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


});

		