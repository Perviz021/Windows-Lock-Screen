// setTimeout bir defe isleyir ancaq
// setTimeout(() => {
//   alert("Welcome");
// }, 2000);

//setInterval ise sonsuza kimi isleye biler
// let num = 0;
// let myInterval = setInterval(() => {
//   num++;
//   alert("Welcome");
//   if (num == 5) {
//     clearInterval(myInterval);
//   }
// }, 2000);

// let d = new Date();
// console.log(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()); //2022/11/3
// d.setDate(d.getDate() + 40);  //Tue Dec 13 2022 12:36:31 GMT+0400 (Azerbaijan Standard Time)

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

$(function () {
  setInterval(() => {
    let d = new Date();
    let hour = d.getHours() % 12; //saat'da am ve pm'e kecid ucun 12'ye bolub qaligi gotururuk
    //eger minute tek gostererse meselen 5:7 bu zaman minute'nin qabagina 0 artirsin
    let minute =
      d.getMinutes().toString().length == 1
        ? "0" + d.getMinutes()
        : d.getMinutes();
    let weekday = weekdays[d.getDay()];
    let month = months[d.getMonth()];
    let day = d.getDate();
    $("#time").text(hour + ":" + minute);
    $("#date").text(weekday + ", " + day + " " + month);
  }, 1000);

  // CTRL + M event on document
  $(document).keyup(function (e) {
    if (e.ctrlKey && e.which == 77) {
      $("#layout").css({
        transform: "translateY(0%)",
      });
    } else if (e.which == 27) {
      $("#layout").css({
        transform: "translateY(-100%)",
      });
    }
  });

  //add keyup event on login input
  $("#layout .loginPart .inputWrapper input").keyup(function (e) {
    if (e.which == 13) {
      if ($(this).val() == "12345") {
        $(this).val("");
        $(this).next().next().fadeOut();
        $("#layout").css({
          transform: "translateY(-100%)",
        });
      } else {
        $(this).next().next().fadeIn();
      }
    }
    //check if input has any value, then eye icon shows up
    if ($(this).val().length > 0) {
      $(this).next().fadeIn();
    } else {
      $(this).next().fadeOut();
    }
  });

  // //add mousedown event on eye icon
  // $("#layout .loginPart .inputWrapper i").mousedown(function (e) {
  //   e.preventDefault();
  //   $(this).prev().attr("type", "text");
  // });
  // //add mouseup event on eye icon
  // $("#layout .loginPart .inputWrapper i").mouseup(function (e) {
  //   e.preventDefault();
  //   $(this).prev().attr("type", "password");
  // });

  // yuxaridakini asagida daha asan formada yazmaq olar
  $("#layout .loginPart .inputWrapper i").on({
    mousedown: function () {
      // JQuery chaining
      $(this).addClass("active").prev().attr("type", "text");
    },
    mouseup: function () {
      // JQuery chaining
      $(this).removeClass("active").prev().attr("type", "password");
    },
  });

  $("#layout").click(function () {
    //nextAll butun novbeti qonsulara isleyir
    $("body").addClass("enableBlur");
    // $("#layout .loginPart").addClass("disableBlur");
    $(".timeHolder").fadeOut(300).nextAll().fadeIn(500);
    $("#layout .loginPart").css(zIndex, "999");
  });

  // add click event to users
  $(".userList li").click(function () {
    //find methodu ile class ve ya id ile hansisa elementi secmek mumkundur
    let username = $(this).find(".userName").text();
    $(".logUserName").text(username);
    username = "";
  });
});
