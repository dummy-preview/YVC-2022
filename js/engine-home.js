$(document).ready(function() {
    // s preload
    if ($(window).load(function() {
            $("#preloader").delay(3500).fadeOut("slow", function() {
                $(this).remove()
            })
        }))

    // click target nav
        $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
        });
    });
});

// e scroll anchor
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 200) {
            $('.nav-menu a.active1').removeClass('active1');
            $('.nav-menu a').eq(i).addClass('active1');
        }
    });
}).scroll();



// s parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
});
// e parallax


// modal post video
// $(document).ready(function() {
//     autoPlayYouTubeModal();
// });

// function autoPlayYouTubeModal() {
//     var triggerOpen = $("body").find('[data-tagVideo]');
//     triggerOpen.click(function() {
//         var theModal = $(this).data("bs-target"),
//             videoSRC = $(this).attr("data-tagVideo"),
//             videoSRCauto = videoSRC + "?autoplay=1";
//         $(theModal + ' iframe').attr('src', videoSRCauto);
//         $(theModal + ' button.modal-close').click(function() {
//             $(theModal + ' iframe').attr('src', videoSRC);
//         });
//         $(theModal + ' .modal-overlay').click(function() {
//             $(theModal + ' iframe').attr('src', videoSRC);
//         });
//     });

// }

// $('.modal-toggle').on('click', function(e) {
//     e.preventDefault();
//     $('.modal').toggleClass('is-visible');
// });

// paralax
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#hero",
//         start: "top top",
//         end: "bottom top",
//         scrub: true
//     }
// });
// gsap.utils.toArray(".parallax").forEach(layer => {
//     const depth = layer.dataset.depth;
//     const movement = -(layer.offsetHeight * depth);
//     tl.to(layer, {
//         y: movement,
//         ease: "none"
//     }, 0);
// });

// var b = document.getElementsByTagName("BODY")[0];
// b.addEventListener("mousemove", function(event) {
//     parallaxed(event);
// });

// function parallaxed(e) {
//     var amountMovedX = (e.clientX * -0.3 / 8);
//     var amountMovedY = (e.clientY * -0.3 / 8);
//     var x = document.getElementsByClassName("parallaxed");
//     var i;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
//     }
// }

// (function() {

//     window.addEventListener('scroll', function(event) {
//         var depth, i, layer, layers, len, movement, topDistance, translate3d;
//         topDistance = this.pageYOffset;
//         layers = document.querySelectorAll("[data-type='parallax']");
//         for (i = 0, len = layers.length; i < len; i++) {
//             layer = layers[i];
//             depth = layer.getAttribute('data-depth');
//             movement = -(topDistance * depth);
//             translate3d = 'translate3d(0, ' + movement + 'px, 0)';
//             layer.style['-webkit-transform'] = translate3d;
//             layer.style['-moz-transform'] = translate3d;
//             layer.style['-ms-transform'] = translate3d;
//             layer.style['-o-transform'] = translate3d;
//             layer.style.transform = translate3d;
//         }
//     });

// }).call(this);