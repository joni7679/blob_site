

$('.gallery').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,

                autoplay: true,
            }
        },

        {
            breakpoint: 950,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.gallery-1').slick({
    rtl: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    
    pauseOnHover: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                autoplay: true,
            }
        },

        {
            breakpoint: 950,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.pricing-silder').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                autoplay: true,
            }
        },

        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(".prev-btn").click(function () {
    $(".pricing-silder").slick("slickPrev");
});

$(".next-btn").click(function () {
    $(".pricing-silder").slick("slickNext");
});


// 

function chngeBackground() {

    var nav_bar = document.querySelector(".navbar-nav");
    // var navBar = document.querySelector(".nav-link");
    // navBar.style.color = "black";
    nav_bar.style.backgroundColor = "white";


}

// circle slice code  for js
function mousemove(){
var  maincrcle =  document.querySelector(".circle")

}