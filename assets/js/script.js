$(document).ready(function(){
    $('a').click(function (evento){
        evento.preventDefault();
        var hashtag = this.hash;
        $('html').animate (
            {scrollTop: $(hashtag).offset().top - 86}, 800
        )
    })
    
})