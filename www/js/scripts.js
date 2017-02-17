var showDialog = function(id) {
  var dialog = document.getElementById(id);
    if (dialog) {
        dialog.show();
  }
  else {
    ons.createDialog('dialog.html')
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};

var showSubmissinDialog = function() {
 ons.createDialog('sub_dialog.html')
      .then(function(dialog) {
        dialog.show();
      });
};
var module = angular.module('my-app', ['onsen']);
module.controller('mainController', function(){
    this.tab = function(){
       myNav.pushPage("tab1.html");
    };
});
module.controller('obsDetailController', function()
        {
            this.test = function()
            {
                // if (document.getElementById("no_algae")
                //     .checked == true)
                // {
                //     ons.notification.alert("no algae");
                // }
                // else if (document.getElementById("little_algae")
                //     .checked == true)
                // {
                //     ons.notification.alert("little_algae");
                // }
                // else if(document.getElementById("plenty_algae")
                //     .checked == true)
                // {
                // ons.notification.alert("plenty_algae");
                // }
                // else if(document.getElementById("rich_algae")
                //     .checked == true){
                //          ons.notification.alert("rich_algae");
                //     }
                // else
                // {
                // ons.notification.alert("Please select an option");
                // }
             //   myNav.pushPage("obs_submission");
                myNavigator.pushPage("obs_submission.html");
             };
        });
 module.controller('PageController', function()
 {
     //  signup = document.getElementById("signup_btn");
     //  login = document.getElementById("login");
     //  login.onclick = function(){
     //      myNav.pushPage("tab.html");
     //  }
     //  signup.onclick = function(){
     //          myNav.pushPage("register.html");
     // }
     this.login = function()
     {
         //    ons.notification.alert("eh");
         myNav.pushPage("tab.html");
     };
     this.signup = function()
     {
         myNav.pushPage("register.html");
     };
     this.nosignup = function()
     {
         myNav.pushPage("tab.html");
     }
 });
 
 
 module.controller('RegisterController', function()
 {
     this.register = function()
     {
       //  ons.notification.alert("eh");
          var email = this.email;
          var password = this.password;
          var username = this.username;
      //    ons.notification.alert(email+password+username);
         //var username = document.getElementById('username').value;
       //  var email = document.getElementById('email').value;
        // var password = document.getElementById('password').value;
        if(email==null||password==null||username==null){
            ons.notification.alert('please fill in information');
        }
         if (email.length < 4)
         {
             ons.notification.alert('Please enter an email address.');
             return;
         }
         if (password.length < 4)
         {
             ons.notification.alert('Please enter a password.');
             return;
         }
        if (username.length < 4){
            ons.notification.alert('Please enter a username.');
            return;
         }
         var auth = firebase.auth();
         auth.createUserWithEmailAndPassword(email, password)
             .then(function(result)
             {
                 // firebase.database()
                 //     .ref('users/' + username)
                 //     .set(
                 //     {
                 //         name: username,
                 //     });
                 myNav.pushPage("tab.html");

                 //    ons.notification.alert("signup successfully!");                 
             })
             .catch(function(error)
             {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 // [START_EXCLUDE]
                 if (errorCode == 'auth/weak-password')
                 {
                     // alert('The password is too weak.');
                     ons.notification.alert('The password is too weak.');
                 }
                 else
                 {
                     //  alert(errorMessage);
                     ons.notification.alert(errorMessage);
                 }
                 console.log(error);
                 // [END_EXCLUDE]
             });
     };
 });
 
 module.controller('ObsAreaController', function(){
     this.submit = function(){
         myNav.pushPage("tab.html");
     };
 });
 
module.controller('obsSubmitController', function(){
    this.submitObs = function(){
        myNav.pushPage("after_sub.html"); 
    };
});


 