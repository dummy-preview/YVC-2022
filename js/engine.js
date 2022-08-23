$(document).ready(function() {

    // Toggle menu on click
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close4").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close5").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close6").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close7").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close8").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });

    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    // s backtotop
    var toggleHeight = $(window).outerHeight() * 0.5;

    $(window).scroll(function() {
        if ($(window).scrollTop() > toggleHeight) {
            $(".m-backtotop").addClass("active");
        } else {
            $(".m-backtotop").removeClass("active");
        }
    });

    $(".m-backtotop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // e backtotop
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
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function videoId(button) {
    var $videoUrl = button.attr("data-video");
    if ($videoUrl !== undefined) {
        var $videoUrl = $videoUrl.toString();
        var srcVideo;

        if ($videoUrl.indexOf("youtube") !== -1) {
            var et = $videoUrl.lastIndexOf("&");
            if (et !== -1) {
                $videoUrl = $videoUrl.substring(0, et);
            }
            var embed = $videoUrl.indexOf("embed");
            if (embed !== -1) {
                $videoUrl =
                    "https://www.youtube.com/watch?v=" +
                    $videoUrl.substring(embed + 6, embed + 17);
            }

            srcVideo =
                "https://www.youtube.com/embed/" +
                $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                "?autoplay=1&loop=1&playlist=" +
                $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                "";
        } else if ($videoUrl.indexOf("youtu") !== -1) {
            var et = $videoUrl.lastIndexOf("&");
            if (et !== -1) {
                $videoUrl = $videoUrl.substring(0, et);
            }
            var embed = $videoUrl.indexOf("embed");
            if (embed !== -1) {
                $videoUrl =
                    "https://youtu.be/" + $videoUrl.substring(embed + 6, embed + 17);
            }

            srcVideo =
                "https://www.youtube.com/embed/" +
                $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                "?autoplay=1&loop=1&playlist=" +
                $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
                "";
        } else {
            alert(
                "error");

            return false;
        }
        return (
            '<iframe src="' +
            srcVideo +
            '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

    } else {
        alert("No video assigned.");
        return false;
    }
}

$(".lets-play").click(function(e) {
    e.preventDefault();
    var $theVideo = videoId($(this));
    if ($theVideo) {
        $("body").
        append(
            '<div class="active" id="video-wrap"><span class="video-overlay"></span><div class="video-container">' +
            $theVideo +
            '</div><button class="close-video">x</button></div>').

        addClass("active");
    }
});

$(document).on("click", ".close-video, .video-overlay", function() {
    $("#video-wrap").remove();
});

// horizontal drag 
var instance = $(".hs__wrapper");
$.each(instance, function(key, value) {

    var arrows = $(instance[key]).find(".arrow"),
        prevArrow = arrows.filter('.arrow-prev'),
        nextArrow = arrows.filter('.arrow-next'),
        box = $(instance[key]).find(".hs"),
        x = 0,
        mx = 0,
        maxScrollWidth = box[0].scrollWidth - box[0].clientWidth / 2 - box.width() / 2;

    $(arrows).on('click', function() {

        if ($(this).hasClass("arrow-next")) {
            x = box.width() / 2 + box.scrollLeft() - 10;
            box.animate({
                scrollLeft: x
            });

        } else {
            x = box.width() / 2 - box.scrollLeft() - 10;
            box.animate({
                scrollLeft: -x
            });

        }

    });

    $(box).on({
        mousemove: function(e) {
            var mx2 = e.pageX - this.offsetLeft;
            if (mx) this.scrollLeft = this.sx + mx - mx2;
        },
        mousedown: function(e) {
            this.sx = this.scrollLeft;
            mx = e.pageX - this.offsetLeft;
        },
        scroll: function() {
            toggleArrows();
        }
    });


    $(document).on("mouseup", function() {
        mx = 0;
    });

    function toggleArrows() {
        if (box.scrollLeft() > maxScrollWidth - 10) {

            nextArrow.addClass('disabled');
        } else if (box.scrollLeft() < 10) {

            prevArrow.addClass('disabled');
        } else {

            nextArrow.removeClass('disabled');
            prevArrow.removeClass('disabled');
        }
    }

});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);