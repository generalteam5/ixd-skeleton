function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
          console.log('Successfully logged in with Facebook');
           FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
    }
} 

function changeUser(response) {
  //Add code to change name and image
  console.log(response);
  $.ajax({type: "POST", url: "SendfbData", data: response, success: function(success){console.log(success)}});

  window.location = 'mslider'; //redirect after log in

}


//function to do google analytics logging
function analytics() {
  ga('create', 'UA-134953827-1', 'auto');
  ga('send', 'event', 'TestA', 'Click', 'AB');
  //window.location.href ='home'; //redirect to home
}


function analyticsB() {
  ga('create', 'UA-134953827-1', 'auto');
  ga('send', 'event', 'TestB', 'Click', 'AB');
  //window.location.href ='home'; //redirect to home
}

function analyticsC() {
  ga('create', 'UA-134953827-1', 'auto');
  ga('send', 'event', 'TestC', 'Click', 'AB');
  //window.location.href ='home'; //redirect to home
}