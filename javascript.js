//menu
var tomnbolMenu = $(".tombol-menu");
var menu = $("nav menu.ul");

function klikMenu(){
    tomnbolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {

    });
}

$(document).ready(function () {
    var width =  $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(document).resize(function() {
    var width =  $(window).width();
    if (width < 989) {
        menu.css("display", "block");
        //display block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }else{
            $("nav").removeClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }
    })
});
