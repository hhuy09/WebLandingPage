$(document).ready(function()
{
    $(".about-section").waypoint(function(a)
    {
        "down"==a?$("nav").addClass("sticky"):$("nav").removeClass("sticky")
    },
    {
        offset:"600px"
    }),
    $("a").click(function(a)
    {
        $("html, body").animate(
            {
                scrollTop:$($.attr(this,"href")).offset().top
            },
            700),a.preventDefault()}),$(".mobile-nav-icon").click(function(){$(".main-nav").slideToggle(200),$(".mobile-nav-icon").hasClass("fa-bars")?($(".mobile-nav-icon").addClass("fa-times"),$(".mobile-nav-icon").removeClass("fa-bars")):($(".mobile-nav-icon").addClass("fa-bars"),$(".mobile-nav-icon").removeClass("fa-times"))})});