$("section#container").load("content.html");
nb_page = 164;

$(window).load(function(){
    // __________________________________ PRINT MARKS __________________________________ //
    doc_height = $("body").height();
    page_height = $("#master-page").height(); 

    // DEBUG
    console.log("Document height: " + doc_height);
    console.log("Page height: " + page_height);
    console.log("Number of pages: " + nb_page);

    for (i = 0; i < nb_page; i++){
        $("#master-page").clone().addClass("preview-page").attr("id","page"+i).insertBefore($("#master-page"));
    }
    $("#master-page").hide();



    $("div.moveable").append("<div class='properties'>Properties</div>").draggable(
            {
                cursor: "move",
                stack: "div.moveable", 
            }).resizable();
    $('.properties').on('click', function() {
        var top = $(this).parent().css('top');
        var left = $(this).parent().css('left');
        var width = $(this).parent().width();
        var height = $(this).parent().height();
        var p = new Popelt({
            title: "Properties to copy/paste into this object's style attribute.",
            content: 'style="top: ' + top + '; left: ' + left + '; width: ' + width + 'px; height: ' + height + 'px;"',
        }).show();
    });
});
