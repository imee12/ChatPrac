$(document).ready(function () {
  foodies.init();

});

var foodies = {

  init: function() {
    foodies.initStyling();


   foodies.initEvents();
  },

  initStyling: function(){

},


initEvents: function (){
  ///////////  THIS SIGNS UP NEW USER //////////

$('.signup').on('click', function(event) {
    event.preventDefault();
    console.log('signup button works');

    var newuser = {

      username: $(this).siblings('input[name="username"]').val(),

      status: "loggedin",
    };
/////////PRINTS MESSAGE TO USER IN HEADER

var username=$('input:text').val();
   $("header").append('<h2> WELCOME '  + username  +  '! </h2>');
console.log(newuser);

   console.log(newuser);

    foodies.signup(newuser);

});

},

signup: function (newuser) {
  $.ajax({
    url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'users',
    data: newuser,
    type: 'POST',
    success: function (data) {
      console.log(data);

      $(".loginbox").hide();
  }

  });
},



};
