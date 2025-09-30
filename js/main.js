$(document).ready(function () {
  $(document).ready(function () {
    $(".family_btn").click(function () {
      $(this).siblings(".family_menu").slideToggle(200);
      $(this).find(".arrow i").toggleClass("rotated");
    });
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.2,
    grid: {
      rows: 2,
    },
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
