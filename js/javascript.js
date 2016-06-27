$(document).ready(function() {
  appendText();
  $("#content").append("<div id='tab1'>Come visit us!<p>We have a wide variety of the best authentic Mexican Food!</p></div>");
  $("#content").append("<div id='tab2' class='hidden'><img src='images/tacos.png'><p>The best tacos in town for only $3.99!!</p></div>");
  $("#content").append("<div id='tab3' class='hidden'>To go orders: (555) 555 5555</div>");
  
  $('li').on('click', function() {
    switch($(this).text()) {
    case "Home":
      $('#tab1').removeClass('hidden');
      $('#tab2, #tab3').addClass('hidden');
      break;
    case "Menu":
      $('#tab2').removeClass('hidden');
      $('#tab1, #tab3').addClass('hidden');
      break;
    case "Contact":
      $('#tab3').removeClass('hidden');
      $('#tab1, #tab2').addClass('hidden');
      break;  
    }
  });
});

function appendText() {
  var txt1 = "<div id='banner'><img src='images/banner.jpg'></div>";
  var txt2 = "<h1>Mexican Restaurant</h1>";
  var txt3 = "<ul id='tabs'><li class='tab'>Home</li><li class='tab'>Menu</li><li class='tab'>Contact</li></ul>";
  $("#content").append(txt1, txt2, txt3);
}
