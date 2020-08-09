$(document).ready(function() {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      effect: "coverflow",
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  };
  //обработка формы
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalide",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Count of letters in the name must be more than 2"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone is required",
          minlength: jQuery.validator.format("At least 10 characters required!"),
					phone: "Your tel number must be in the format of  +7 *** *** ** **",
        },
      },   
    });
  });   
  $("#contactsForm").inputmask("email");
  $("#contactForm").inputmask("email");
  jQuery(function($){
    $(".phone").mask("+7 (999) 999-99-99");
 });
 document.querySelector(".map__preview").addEventListener("mouseenter", ()=>{
  document.querySelector(".map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31608.153640525412!2d98.27942255114789!3d7.996953176476688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305039f77c82826f%3A0xacc83aa6f90754f6!2sHilton%20Garden%20Inn%20Phuket%20Bang%20Tao!5e0!3m2!1sru!2sru!4v1596567498649!5m2!1sru!2sru" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
}
),
 AOS.init();
});



