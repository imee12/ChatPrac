$(document).ready(function () {
  foodies.init();
  setInterval(function() {
  //       console.log("hi everyone!");
  //       var screenTmpl = _.template(template.foodpix);
  //       var markup = "";
  //     _.each(foodpics, function (currentItem, index, array){
  //       markup+= screenTmpl(currentItem);
  //       console.log(currentItem);
  //     });
  //   $(".homescreen").html(markup);
  // console.log(markup);
  //

}, 1000);
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
      $("#createMsg")[0].reset();
     foodies.sendmsg(newMsg);

    });

///////////THIS WILL DELETE A MESSAGE IN CHOMP CHAT/////////
$(".room1").on('click', '.deletemsgx', function (event) {
 event.preventDefault();
 console.log("delete message button works");
 var msgid = $(this).closest('article').data('msgid');
console.log(msgid);
foodies.deletemsg(msgid);
});

///////////THIS WILL LOGIN PREVIOUS USER////////
// $('.login').on('click', function(event) {
//     event.preventDefault();
//     console.log('login button works');
//
//     var olduser = {
//
//       username: $(this).siblings('input[name="username"]').val(),
//
//       status: "loggedin",
//     };
/////////PRINTS MESSAGE TO USER IN HEADER

// var username=$('input:text').val();
//    $(".username").append(username  +  '!' );
// console.log(olduser);
// localStorage.username = $('input:text').val();
//
//
//     foodies.signup(olduser);
//
// });
//
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

// login: function (newuser) {
//   $.ajax({
//     url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'users',
//     data: olduser,
//     type: 'GET',
//     success: function (data) {
//       console.log(data);
//
//       _.each(data, function (item, index, array) {
//
//       if(username==="item.username"){
//     console.log("I got the username");
//   } else if (username !="item.username") {
//     console.log("Nope. not working.");
//     };
//     },
//     error: function (err) {
//       console.log(err);
//     }
//     });
//
//
//
//
//       $(".loginbox").hide();
//       $(".username").show();
//       $(".roombutton").show();
//   }
//
//   });
// },



sendmsg: function (msg) {
    $.ajax ({
      url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'room2',
      data: msg,
      type: "POST",
      success: function (data) {
        console.log(msg);


      foodies.renderRoom();
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


deletemsg: function (id) {

  $.ajax({
    url:'http://tiy-fee-rest.herokuapp.com/collections/foodies' + '-' + 'room2/' + id,
      type: 'DELETE',
      success: function (data) {
        console.log(data);
        foodies.renderRoom();
      },
      error: function (err) {
        console.log(err);
      }
    });
},










};
