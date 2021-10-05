
let search = document.querySelectorAll('.icon');
let search_bar = document.querySelector('.search');
let login_right = document.querySelector('.login');
let navbar_right = document.querySelector('.navbar');

search.forEach((item)=>{
    item.addEventListener('click', ()=>{
        
        if (item.classList.contains('fa-search')){
            search_bar.classList.toggle('search_tra');
            login_right.classList.remove('login_right');
            navbar_right.classList.remove('navbar_right');

        } else if (item.classList.contains('fa-user')) {
            login_right.classList.toggle('login_right');
            search_bar.classList.remove('search_tra');
            navbar_right.classList.remove('navbar_right');

        } else if (item.classList.contains('fa-bars')) {
            navbar_right.classList.toggle('navbar_right');
            login_right.classList.remove('login_right');
            search_bar.classList.remove('search_tra');
            
        }
        
    });
});


let navbar = document.querySelectorAll('.a_tag');

navbar.forEach((item)=>{
    item.addEventListener('click', ()=>{
        for (i=0; i<navbar.length; i++) {
            navbar[i].classList.remove('active')
        }

        item.classList.add('active');
        navbar_right.classList.remove('navbar_right');

    })
})



window.onscroll = () => {
    login_right.classList.remove('login_right');
    search_bar.classList.remove('search_tra');
    navbar_right.classList.remove('navbar_right');
}

window.addEventListener('scroll', ()=>{

    let header = document.querySelector('header');
    let header_div = document.querySelector('.header_container');

    if (window.pageYOffset > 20) {
        header.classList.add('position');
        header_div.classList.add('position2');
    } else {
        header.classList.remove('position');
        header_div.classList.remove('position2');
    }
    
});





var swiper = new Swiper(".reviews_wrapper", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });