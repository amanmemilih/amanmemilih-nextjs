//Hover animation - 1302220001
$(document).ready(function () {
  $(".king").hover(
    function () {
      $(this)
      .css("border", "2px solid rgba(255, 114, 114, 0.09)")
      .animate(
        {
          marginTop: "-10px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        },
        300
      );
    },
    function () {
      $(this)
      .css("border", "none")
      .animate(
        {
          marginTop: "0px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
        300
      );
    }
  );
});

// Highlight animation - 1302223083
// $(document).ready(function () {
//   $(".highlight").hover(
//     //hover state
//     function () {
//       $(this).css({
//         "background-color": "#ffff77",
//       });
//     },
//     //default state
//     function () {
//       $(this).css({
//         "background-color": "",
//       });
//     }
//   );
// });

// Toggle Hamburger Button - 1302223047
$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $("#nav-links").toggleClass("hidden"); // Show or hide nav links on small screens
  });
});


// JQUERY Wildan
$(document).ready(function () {
    $(".confettiButton").on("click", function () {
        confettiAnimation(this);
    });
});

function confettiAnimation(element) {
    // Dapatkan posisi tombol di layar
    const rect = element.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    // Luncurkan confetti dari posisi tombol
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: originX, y: originY }
    });
}
