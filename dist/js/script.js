"use strict";

window.addEventListener("DOMContentLoaded", function () {
  function closeModal() {
    $(".popup").removeClass("active");
    $("body").off("click");
  }

  document.addEventListener("keydown", function (e) {
    if (e.code === "Escape") {
      closeModal();
    }
  }); //Pop-up

  $(".js-open").on("click", function (e) {
    e.preventDefault();
    var attr = $(this).data("attr");
    closeModal();
    $(attr).addClass("active");
  });
  $(".js-close").on("click", function (e) {
    e.preventDefault();
    closeModal();
  }); //меню

  $(window).resize(function () {
    if ($(window).width() > 1340) {
      $(".menu__item").removeClass("opened");
      $(".menu__box").removeClass("active");
      $("html").removeClass("html-over");
    }
  });
  $(".hamburger").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".menu").find(".menu__box").addClass("active");
    $("html").addClass("html-over");
  });
  $(".menu__close").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".menu__box").removeClass("active");
    $("html").removeClass("html-over");
  });
  $(".popup").on("click", function (e) {
    $("body").on("click", function () {
      if (e.target.classList.contains("popup")) {
        closeModal();
      }
    });
  }); //TOTOP

  var topShow = 200,
      delay = 1500,
      buttonTop = $(".up");
  $(window).scroll(function () {
    if ($(this).scrollTop() > topShow) {
      buttonTop.fadeIn();
    } else {
      buttonTop.fadeOut();
    }
  });
  buttonTop.on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, delay);
  }); //TABS

  try {
    var hideTabContents = function hideTabContents() {
      tabContents.forEach(function (item) {
        item.classList.add("hide");
        item.classList.remove("show", "fade");
      });
      tabs.forEach(function (item) {
        item.classList.remove("active");
      });
    };

    var showTabContent = function showTabContent() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      tabContents[position].classList.add("show", "fade");
      tabContents[position].classList.remove("hide");
      tabs[position].classList.add("active");
    };

    var tabContents = document.querySelectorAll(".tab-content"),
        tabsList = document.querySelector(".tabs"),
        tabs = tabsList.querySelectorAll(".tab");
    tabsList.addEventListener("click", function (e) {
      var target = e.target;

      if (target.classList.contains("tab")) {
        tabs.forEach(function (item, num) {
          if (item == target) {
            hideTabContents();
            showTabContent(num);
          }
        });
      }
    });
  } catch (error) {} //SWIPER


  try {
    var swiper = new Swiper(".main-swiper", {
      // Optional parameters
      loop: true,
      keyboard: {
        enabled: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    var materialsSwiper = new Swiper(".room-swiper", {
      keyboard: {
        enabled: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  } catch (error) {}

  try {
    $("#restaurant").justifiedGallery({
      captions: false,
      rowHeight: 240,
      margins: 8
    }).on("jg.complete", function () {
      window.lightGallery(document.getElementById("restaurant"), {
        showCloseIcon: true
      });
    });
    $("#bar").justifiedGallery({
      captions: false,
      rowHeight: 240,
      margins: 8
    }).on("jg.complete", function () {
      window.lightGallery(document.getElementById("bar"), {
        showCloseIcon: true
      });
    });
    $("#territory").justifiedGallery({
      captions: false,
      rowHeight: 240,
      margins: 8
    }).on("jg.complete", function () {
      window.lightGallery(document.getElementById("territory"), {
        showCloseIcon: true
      });
    });
    $("#people").justifiedGallery({
      captions: false,
      rowHeight: 240,
      margins: 8
    }).on("jg.complete", function () {
      window.lightGallery(document.getElementById("people"), {
        showCloseIcon: true
      });
    });
    $("#forest").justifiedGallery({
      captions: false,
      rowHeight: 240,
      margins: 8
    }).on("jg.complete", function () {
      window.lightGallery(document.getElementById("forest"), {
        showCloseIcon: true
      });
    });
    $("#washed").justifiedGallery({
      captions: false,
      rowHeight: 240,
      margins: 8
    }).on("jg.complete", function () {
      window.lightGallery(document.getElementById("washed"), {
        showCloseIcon: true
      });
    });
  } catch (error) {}
});