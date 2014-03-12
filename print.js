// __________________________________ PRINT MARKS __________________________________ //
doc_height = $("body").height();
page_height = $("#master-page").height(); 
//page_height = 22; 
nb_page = Math.ceil(doc_height/page_height) + 4;
//gutter = parseInt($("#fakepage").css("top"));  // = 1cm


for (i = 0; i <= nb_page; i++){
    $("#master-page").clone().css({'outline-offset': '-1cm', 'display': 'block'}).attr("id","page"+i).insertBefore($("#master-page"));
        
    // FOLIO
    //$("#fakepage-p" + i + " .folio").html("<p>page " + (i+1) + "</p>");
}
