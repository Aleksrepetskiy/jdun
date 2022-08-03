window.addEventListener("DOMContentLoaded", () => {
    function closeModal() {
        $(".popup").removeClass("active");
        $("body").off('click');
    }

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            closeModal();
        }
    });
    //Pop-up
    $(".js-open").on("click", function (e) {
        e.preventDefault();
        var attr = $(this).data("attr");
        closeModal();
        $(attr).addClass("active");
    });

    $(".js-close").on("click", function (e) {
        e.preventDefault();
        closeModal();
    });

    //меню

    $(window).resize(function () {
        if ($(window).width() > 767) {
            $(".menu__item").removeClass("opened");
            $(".menu__box").removeClass("active");
            $(".sub-menu__list").attr("style", "");
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
        $("body").on( "click", function() {
            if (e.target.classList.contains("popup")) {
                closeModal();
            }
        });
    });

    //о нас открытие на моб версии

    $(".js-more").on("click", function (e) {
        e.preventDefault();
        $(this)
            .closest(".js-show")
            .find(".about__container")
            .removeClass("active");
        $(this).hide();
    });

    //faq
    $(".faq__header").on("click", function (e) {
        e.preventDefault();
        var $this = $(this),
            item = $this.closest(".faq__item");
        (list = $this.closest(".faq__list")),
            (items = list.find(".faq__item")),
            (content = item.find(".faq__dropdown")),
            (otherContent = list.find(".faq__dropdown")),
            (duration = 300);

        if (!item.hasClass("active")) {
            items.removeClass("active");
            item.addClass("active");
        } else {
            item.stop(true, true).removeClass("active");
        }
    });

    //TOTOP
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
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            delay
        );
    });

    //READ-MORE
    try {
        const readMoreContent = document.querySelector(".read-more__content"),
            readMoreBtn = document.querySelector(".read-more__btn"),
            readMoreBtnBox = document.querySelector(".read-more__btn-box");
        if (readMoreBtn) {
            readMoreBtn.addEventListener("click", (e) => {
                e.preventDefault();
                readMoreBtnBox.remove();
                readMoreContent.classList.remove("read-more__hide");
            });
        }
    } catch (error) {}

    //TABS
    try {
        const tabContents = document.querySelectorAll(
                ".index-news__tab-content"
            ),
            tabsList = document.querySelector(".index-news__tabs"),
            tabs = tabsList.querySelectorAll(".index-news__tab");

        function hideTabContents() {
            tabContents.forEach((item) => {
                //item.style.display = "none"
                item.classList.add("hide");
                item.classList.remove("show", "fade");
            });
            tabs.forEach((item) => {
                item.classList.remove("active");
            });
        }
        function showTabContent(position = 0) {
            // tabContents[position].style.display = "block";
            tabContents[position].classList.add("show", "fade");
            tabContents[position].classList.remove("hide");
            tabs[position].classList.add("active");
        }
        tabsList.addEventListener("click", function (e) {
            const target = e.target;
            if (target.classList.contains("index-news__tab")) {
                tabs.forEach((item, num) => {
                    if (item == target) {
                        hideTabContents();
                        showTabContent(num);
                    }
                });
            }
        });
    } catch (error) {}

    //SWIPER
    try {
        const swiper = new Swiper(".main-swiper", {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        const tableSwiper = new Swiper(".table-swiper", {
            // Optional parameters
            loop: false,
            spaceBetween: 30,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                // when window width is <= 499px
                499: {
                    slidesPerView: 1,
                    spaceBetweenSlides: 50,
                },
                // when window width is <= 999px
                999: {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                },
            },
        });

        const materialsSwiper = new Swiper(".materials-swiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is <= 499px
                320: {
                    slidesPerView: 1,
                },
                499: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
            },
        });
    } catch (error) {}
});
