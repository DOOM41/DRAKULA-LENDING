var $page = $('html, body');
$('a[href*="#news_slide"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
    return false;
});
$('a[href*="#rest_slide"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
    return false;
});
$('a[href*="#menu_slide"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
    return false;
});
function PopUpShow()
{
    $('#st_popup').show();
}
function PopUpHide(){
    $('#st_popup').hide();
}
$(document).ready(function(){
    PopUpHide();
});
$(document).mouseup(function (e) {
    var container = $("#st_popup");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
