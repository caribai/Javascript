$(document).ready(function(){

//smothscroll

    $('a').click(function (evento){
        evento.preventDefault();
        var hashtag = this.hash;
        $('html').animate (
            {scrollTop: $(hashtag).offset().top - 86}, 800
        )
    })

//Tooltip

    $('[data-toggle="tooltip"]').tooltip()


//Toggle en cards

     $('.card-title').click(function() {
        $('.card-text').toggle( "slow", function() {
    });

  });

})