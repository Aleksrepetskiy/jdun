window.addEventListener("DOMContentLoaded", () => {
    function closeModal() {
        $(".popup").removeClass("active");
        $("body").off("click");
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

    //TABS
    try {
        const tabContents = document.querySelectorAll(".tab-content"),
            tabsList = document.querySelector(".tabs"),
            tabs = tabsList.querySelectorAll(".tab");

        function hideTabContents() {
            tabContents.forEach((item) => {
                item.classList.add("hide");
                item.classList.remove("show", "fade");
            });
            tabs.forEach((item) => {
                item.classList.remove("active");
            });
        }
        function showTabContent(position = 0) {
            tabContents[position].classList.add("show", "fade");
            tabContents[position].classList.remove("hide");
            tabs[position].classList.add("active");
        }
        tabsList.addEventListener("click", function (e) {
			const target = e.target;
            if (target.classList.contains('tab')) {
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
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        const materialsSwiper = new Swiper(".room-swiper", {
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
        });
    } catch (error) {}

    $("#restaurant")
        .justifiedGallery({
            captions: false,
            rowHeight: 240,
            margins: 8,
        })
        .on("jg.complete", function () {
            window.lightGallery(document.getElementById("restaurant"), {
                showCloseIcon: true,
            });
        });
    $("#bar")
        .justifiedGallery({
            captions: false,
            rowHeight: 240,
            margins: 8,
        })
        .on("jg.complete", function () {
            window.lightGallery(document.getElementById("restaurant"), {
                showCloseIcon: true,
            });
        });
    $("#territory")
        .justifiedGallery({
            captions: false,
            rowHeight: 240,
            margins: 8,
        })
        .on("jg.complete", function () {
            window.lightGallery(document.getElementById("restaurant"), {
                showCloseIcon: true,
            });
        });
    $("#washed")
        .justifiedGallery({
            captions: false,
            rowHeight: 240,
            margins: 8,
        })
        .on("jg.complete", function () {
            window.lightGallery(document.getElementById("restaurant"), {
                showCloseIcon: true,
            });
        });
});
