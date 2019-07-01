
/* accordion */

$(document).ready(function () {
    $("#accordion").accordion({
        animate: 1200,
        heightStyle: "content",
        header: ".road .tabblad"
    });
});



/* play-pause rewind knop */
$(document).ready(function () {
    $("video").each(function () {

        var player = videojs(this.id, {

        });

        $("button#rewind").click(function () {
            player.currentTime(-10);
        });

        let geklikt = false;

        $("button#play-pause").click(function () {
            if (!geklikt) {
                player.pause();
                geklikt = true;

            }
            else {
                player.play();
                geklikt = false;
            }
        });

    });

});


$(document).ready(function () {
    $("video").each(function () {

        var modal = document.querySelector(".modal");
        var $videoVideo = $(this).parents(".wrapper-video").find(".videoVideo");

        var closeButton = document.querySelector(".close");
        var seen = false;

        $videoVideo.click(function () {
            
            if (!seen) {
                $(this).parents(".road").find(".seen").show()
                seen = true;

            } else {
                $(this).parents(".road").find(".seen").hide()
                seen = false;
            }
        });



        function toggleModal() {
            modal.classList.toggle("show-modal");
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                toggleModal();
            }
        }

        $videoVideo.click(function () {
            toggleModal();
        });

        window.addEventListener("click", windowOnClick);



    });
});




$(document).ready(function () {
    $(".modal").addClass("display-none");

    $(".videoVideo").click(function () {
        $(".modal").removeClass("display-none");
        $(".modal").addClass("display-block");
    });

    $(".close").click(function () {
        $(".modal").addClass("display-none");
        $(".modal").removeClass("display-block");

    });

});


$('#vinkjeCheck').on('click', () => {
    if ($('#vinkjeCheck').prop('checked')) {
        $('body').addClass('dark');
        $('.codingBlock').addClass('dark');
        $('header').addClass('dark');
        $('nav ul li a').addClass('whitecolor');
        $('.tabblad').addClass('whitecolor');
        $('.containerTwo').addClass('dark');
        $('.imgBlock').addClass('whitebackground'); 
        $('#footer').addClass('whitebackground');
//        $('ul li a').addClass('whitecolor');
        

    }
    
    else {
        $('body').removeClass('dark');
        $('.codingBlock').removeClass('dark');
        $('header').removeClass('dark');
        $('nav ul li a').removeClass('whitecolor');
        $('.tabblad').removeClass('whitebackground');
        $('.containerTwo').removeClass('dark');
        $('.imgBlock').removeClass('dark');
        $('#footer').removeClass('whitebackground');
//        $('ul li a').removeClass('whitecolor');
        

    }
    
 



})