$(document).ready(function () {
    const $input = $(".search_input");
    const $historyBox = $(".search_history");

    // Show on focus
    $input.on("focus", function () {
        $historyBox.show();
    });

    // Hide on blur
    $input.on("blur", function () {
        setTimeout(function () {
            $historyBox.hide();
        }, 200);
    });
});

// menu_fix-js
var menu = $('.top_header').offset().top;

$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (menu < scroll) {
        $('.top_header').addClass('menu_fix');
    } else {
        $('.top_header').removeClass('menu_fix');
    }
});

// bt_top-js
$('.bt_top').click(function () {
    $('html,body').animate({
        scrollTop: 0,
    }, 1500);
});

$(window).scroll(function () {
    var abc = $(this).scrollTop();

    if (abc > 200) {
        $('.bt_top').fadeIn();
    } else {
        $('.bt_top').fadeOut();
    }
});


$(document).ready(function () {
    $(".category-link").on("click", function (e) {
        e.preventDefault();

        let submenu = $(this).next(".subcategory");
        let arrow = $(this).find(".arrow");

        // অন্য সব সাবমেনু বন্ধ করো
        $(".subcategory").not(submenu).slideUp();
        $(".arrow").not(arrow).removeClass("rotate");

        // বর্তমান সাবমেনু টগল করো
        submenu.slideToggle();
        arrow.toggleClass("rotate");
    });
});


$(document).ready(function () {

    // Sidebar open
    $(".category_menu").on("click", function (e) {
        e.preventDefault();
        $(".side_nav").addClass("active");
    });

    // Sidebar close
    $(".cros_category").on("click", function () {
        $(".side_nav").removeClass("active");
    });

});

// banner slider
$("[data-owl-carousel]").each(function () {
    var $this = $(this);
    $this.owlCarousel({
        autoplay: $this.data("autoplay") || false,
        autoplayTimeout: $this.data("autoplay-timeout") || 5000,
        items: $this.data("items") || 1,
        dots: $this.data("dots") || false,
        nav: $this.data("nav") || false,
        loop: true
    });
});

// category slider 
$('.category_wrap').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {

        0: {
            items: 3
        },
        575: {
            items: 4
        },
        768: {
            items: 5
        },
        992: {
            items: 6
        },
        1200: {
            items: 9
        },
        1600: {
            items: 10
        }
    }
});

// login form
$(document).ready(function () {
    // Allow only numbers
    $("#phone").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, ''); // remove non-numeric

        let phone = $(this).val();
        let $icon = $(".validation-icon");
        let $error = $(".error-msg");
        let $success = $(".success-msg");
        let $btn = $("#submitBtn");

        // Reset
        $icon.removeClass("fa fa-check fa-times text-success text-danger").hide();
        $error.hide();
        $success.addClass("d-none");
        $btn.prop("disabled", true);

        if (phone.length === 0) {
            $error.show();
            return;
        }

        if (/^01\d{9}$/.test(phone)) {
            // ✅ Valid
            $icon.addClass("fa fa-check text-success").show();
            $success.removeClass("d-none");
            $btn.prop("disabled", false);
        } else {
            // ❌ Invalid
            $icon.addClass("fa fa-times text-danger").show();
            $error.show();
        }
    });

    // Prevent actual form submission for demo
    $("#loginForm").on("submit", function (e) {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
});

// qty
$(document).ready(function () {
    // Increase quantity
    $('.cart-btn-increase').click(function () {
        var $input = $(this).siblings('.cart-quantity-input');
        var val = parseInt($input.val());
        if (!isNaN(val)) {
            $input.val(val + 1);
        }
    });

    // Decrease quantity
    $('.cart-btn-decrease').click(function () {
        var $input = $(this).siblings('.cart-quantity-input');
        var val = parseInt($input.val());
        if (!isNaN(val) && val > 1) {
            $input.val(val - 1);
        }
    });
});


// product details 
$(document).ready(function() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  const set_quantity = $('.set_quantity');
  const priceEl = $('.product_price');
  const totalEl = $('.total_cost');

  const unitPrice = 200; // একক প্রোডাক্ট দাম

  function updateValues(value) {
    input.val(value);
    set_quantity.text(value);

    let totalPrice = unitPrice * value;

    priceEl.text("৳ " + totalPrice);
    totalEl.text("৳ " + totalPrice + " + চায়না কুরিয়ার বিল + শিপিং চার্জ");
  }

  minus.click(function(e) {
    e.preventDefault();
    var value = parseInt(input.val());
    if (value > 1) {
      value--;
    }
    updateValues(value);
  });

  plus.click(function(e) {
    e.preventDefault();
    var value = parseInt(input.val());
    value++;
    updateValues(value);
  });

  updateValues(parseInt(input.val()));
});

$(document).ready(function() {
  // color select event
  $('input[name="color"]').change(function() {
    let selectedColor = $(this).next('label').text();
    $('.color_value').text(selectedColor);
  });
}); 

  new VenoBox({
    selector: '.venobox',
    numeration: true,
    infinigall: true,
    spinner: 'cube-grid'
  });