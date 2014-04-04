$(window).load(function(){
    // __________________________________ PRINT MARKS __________________________________ //
    doc_height = $("body").height();
    page_height = $("#master-page").height(); 
    //page_height = 22; 
    nb_page = Math.ceil(doc_height/page_height);
    //gutter = parseInt($("#fakepage").css("top"));  // = 1cm

    console.log(doc_height);
    console.log(page_height);
    console.log(nb_page);

    for (i = 0; i < nb_page; i++){
        $("#master-page").clone().addClass("preview-page").attr("id","page"+i).insertBefore($("#master-page"));
            
        // FOLIO
        //$("#fakepage-p" + i + " .folio").html("<p>page " + (i+1) + "</p>");
    }
    $("#master-page").hide();



    $("div.moveable").append("<div class='properties'>Properties</div>").draggable(
            {
                stack: "div.moveable", 
            }).resizable();
    $('.properties').on('click', function() {
        var top = $(this).parent().css('top');
        var left = $(this).parent().css('left');
        var width = $(this).parent().width();
        var height = $(this).parent().height();
        var p = new Popelt({
            title: "Properties to copy/paste into this object's style attribute.",
            content: 'style = "top: ' + top + '; left: ' + left + '; width: ' + width + 'px; height: ' + height + 'px;"',
        }).show();
    });
});
