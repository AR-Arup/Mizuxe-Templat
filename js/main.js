$(document).ready(function () {
    var scrollLink = $(".scroll");

    scrollLink.click(function (e) {
        e.preventDefault();
        console.log('clicked');
        
        $("body,html").animate({
                scrollTop: $(this.hash).offset().top
            },
            1000
        );
    });
});