// Singers Accordings
$('.singer').click(function () {
    $(this).next().slideToggle(500);
    $(this).parent().siblings().children('.singer').next().slideUp(500)
})

// Open Menu
$('.open-menu').click(function () {
    $(this).animate({left: '270px'}, 500)
    $('side-menu').animate({width: '250px'}, 500)
}) 

// Close Menu
$('.close-menu').click(function () {
    $('.open-menu').animate({left: '20px'}, 500)
    $('side-menu').animate({width: '0'}, 500)
})

// Change Menu Links Color on Hover
$(".menu").children().mouseover(function () {
    $(this).css({'color' : '#601c1a', 'transition' : 'all 0.4s'})
})

$(".menu").children().mouseleave(function () {
    $(this).css({'color' : '#fff', 'transition' : 'all 0.4s'})
})


// Set Countdown Date
$('.count .row').countdown("2025/02/28", function(event) {
    $(this).html(event.strftime('days :%M:%S'));
    $(this).html(event.strftime(`<div class="col-md-6 col-lg-3">
                    <div class="d-flex justify-content-center align-items-center border border-1 border-white py-5">
                        <span class="fs-3 fw-bold text-white">%D d</span>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3">
                    <div class="d-flex justify-content-center align-items-center border border-1 border-white py-5">
                        <span class="fs-3 fw-bold text-white">%H h</span>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3">
                    <div class="d-flex justify-content-center align-items-center border border-1 border-white py-5">
                        <span class="fs-3 fw-bold text-white">%M m</span>
                    </div>
                </div>
                
                <div class="col-md-6 col-lg-3">
                    <div class="d-flex justify-content-center align-items-center border border-1 border-white py-5">
                        <span class="fs-3 fw-bold text-white">%S s</span>
                    </div>
                </div>`));
});

// Social Media Hover
$('.social-icons a').mouseover(function () {
    $(this).css({'color' : '#fff', 'background-color': '#bb2d3b', 'border-color': '#bb2d3b', 'transition' : 'all 0.4s'})
})


$('.social-icons a').mouseleave(function () {
    $(this).css({'color' : '#888', 'background-color': '#fff', 'border-color': '#ccc', 'transition' : 'all 0.4s'})
})

// Textarea Remaining Characters
const max = $('textarea').attr('maxlength')
$('.character-remaining').html(`<span class="text-danger">${max}</span> Characters Remaining`)

$('textarea').keyup(function () {
    const charsLength = $('textarea').val().length
    $('.character-remaining').html(`<span class="text-danger">${max - charsLength}</span> Characters Remaining`)
})

