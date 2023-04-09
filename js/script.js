const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:true,
    
        pagination: {
        el: '.swiper-pagination',
        },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

    });

    //Scroll to Accomodation section
    $('.hvr-sweep-to-right').click(function(){
        $('html , body').animate({
            scrollTop: $('.Hotel-Accomodation').offset().top
    
        },1000)
    })