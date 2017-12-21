

$(function(){

    $('#ulNav li a').click(function(){
        $('#ulNav li').removeClass('active');
        $('#ulNav a').removeClass('active');
        $(this).parent().addClass('active');
        $(this).addClass('active');

    })

})