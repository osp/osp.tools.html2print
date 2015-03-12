$(function() {
    // ________________________________ INIT __________________________________ //
    // Cloning the master page
    for (i = 1; i < nb_page; i++){
        $("#master-page").clone().attr("id","page-"+i).insertBefore($("#master-page"));
    }
    $("#master-page").attr("data-width", $(".paper:first-child").width()).hide();

    // Loads main content into <article id="my-story">
    $("#my-story").load(content);


    // ________________________________ PREVIEW __________________________________ //
    $("#preview").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("html").toggleClass("preview normal");
    });

    // __________________________________ DEBUG __________________________________ //
    $("#debug").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("html").toggleClass("debug");
    });

    // __________________________________ SPREAD __________________________________ //
    $("#spread").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("html").toggleClass("spread");
        w = parseInt($("#master-page").attr("data-width")) * 2 + 100;
        $("#pages").css("width",  w + "px");
        $("html").css("width",  w + "px");
        $(".paper:first-child").css("margin-left", w/2);
    });

    // __________________________________ HIGH RESOLUTION __________________________________ //
    $("#hi-res").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("html").toggleClass("export");
        $("img").each(function(){
            var hires = $(this).attr("data-alt-src");
            var lores = $(this).attr("src");
            $(this).attr("data-alt-src", lores)
            $(this).attr("src", hires)
        });
        console.log("Wait for hi-res images to load");
        window.setTimeout(function(){
            console.log("Check image resolution");
            // Redlights images too small for printing
            $("img").each(function(){
                if (Math.ceil(this.naturalHeight / $(this).height()) < 3) {
                    console.log($(this).attr("src") + ": " + Math.floor(this.naturalHeight / $(this).height()) );
                    if($(this).parent().hasClass("moveable")) {
                        $(this).parent().toggleClass("lo-res");
                    } else {
                        $(this).toggleClass("lo-res");
                    }
                }
            });
        }, 2000);
    });


    // __________________________________ TOC __________________________________ //
    $(".paper").each(function(){
        page = $(this).attr("id");
        $("#toc-pages").append("<li><a href='#" + page + "'>" + page.replace("-", " ") + "</a></li>")
    });

    $("#goto").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("#toc-pages").toggle();
    });


    // __________________________________ ZOOM __________________________________ //
    $("#zoom").click(function(e){
        e.preventDefault();
        $(this).toggleClass("button-active");
        $("#zoom-list").toggle();
    });
    $("#zoom-list a").click(function(e){
        e.preventDefault();
        zoom = $(this).attr("title") / 100 ;
        unzoom = 1 / zoom;
        $("#pages").css("-webkit-transform", "scale(" + zoom + ")");
        $("#pages").css("-webkit-transform-origin", "0 0");
    });


    
});
