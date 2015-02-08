$(document).ready(function () {
  foodies.init();

});

var foodies = {

  init: function() {
    foodies.initStyling();
    foodies.initSignup();

   foodies.initEvents();
  },

  initStyling: function(){

},



  ///////////  THIS SIGNS UP NEW USER //////////
initSignup: function () {
$('.signup').on('click', function(event) {
    event.preventDefault();
    console.log('signup button works');

    var newuser = {

      username: $(this).siblings('input[name="username"]').val(),

      status: "loggedin",
    };
/////////PRINTS MESSAGE TO USER IN HEADER

var username=$('input:text').val();
   $(".username").append(username  +  '!' );
console.log(newuser);
localStorage.username = $('input:text').val();


    foodies.signup(newuser);

});
},
initEvents: function (){


////////NOW ENTERING CHOMP CHAT ///////////
$(".enterroom").on('click', function (event) {
  console.log("enterroom works");
  $(".room1").show();
  $(".chatbox").show();
  $(".msgbox").show();
  $(".enterroom").hide();

  foodies.renderRoom();

});

////////SENDING A MESSAGE IN CHOMP CHAT////////

$(".sendmsg").on('click', function (event){
  event.preventDefault();
  console.log("sendmessage button works");



        var newMsg = {
          username: (localStorage.username),
          msg: $('input[name=newmsg]').val(),

      };

     foodies.sendmsg(newMsg);

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
      $(".username").show();
      $(".roombutton").show();
  }

  });
},


sendmsg: function (msg) {
    $.ajax ({
      url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'room2',
      data: msg,
      type: "POST",
      success: function (data) {
        console.log(msg);


      books.renderRoom();
},
  error: function (error) {
    console.log(error);
}
});
},




 renderRoom: function () {
      $.ajax ({
        url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'room2',
        //data: msg,
        type: 'GET',
        success: function (msg) {
          var roomTemplate = _.template(template.room1);
          var markup= "";
          _.each(msg, function (item, index, array) {

            markup +=roomTemplate(item);
    });
          console.log('markup is ...');
          $('.chatbox').html(markup);
  },
          error: function (error) {
            console.log("error");
}
});
},








};
