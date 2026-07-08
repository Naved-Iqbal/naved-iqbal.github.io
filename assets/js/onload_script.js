$(document).ready(function(){
    $('#content').load('calculator.html');
    $("#year").text(new Date().getFullYear());
 
 
    
    $("#brand_link").click(function() {
       $("#content").load('calculator.html');
       return false;
    });
 
 
    $("#home_link").click(function() {
       $("#content").load('calculator.html');
       $("#navbarHeader").removeClass("show");
       $("#toggle_button").attr("aria-expanded","false");
       $("#toggle_button").addClass("collapsed");
       return false;
    });
 
    $("#about_link").click(function() {
       $("#content").load('about.html');
       $("#navbarHeader").removeClass("show");
       $("#toggle_button").attr("aria-expanded","false");
       $("#toggle_button").addClass("collapsed");
       return false;
    });
 
 });