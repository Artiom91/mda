$(document).ready(function(){
    $('.carousel__iner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.svg"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/right.svg"> </button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
        });
        $('.modall__close').on('click', function () {
           $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
        });

        $('.button_mini').each(function(i) {
           $(this).on('click', function() {
               $('#order .modall__descr').text($('.catalog-item__subtitle').eq(i).text());
               $('.overlay, #order').fadeIn('slow');
           })
        });


        function valideForms(form) {
            $('form').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите {0} символa!")
                    },
                    phone: "Введите ваш номер тел.",
                    email: {
                        required: "Пожалуйста, введите свою почту",
                        email: "Неправильно введен адрес"
                    }
                }
            });
        };
        valideForms('#order form');
        valideForms('#consultation-form');
        valideForms('#consultation form');

        $('input[name=phone]').mask("+373(99) 999-999");
});