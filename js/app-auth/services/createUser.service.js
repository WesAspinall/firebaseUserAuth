let CreateUserService = function($http){

  let ref = new Firebase("https://waspnx.firebaseio.com");

  ref.authWithPassword({
    email    : "bobtony@firebase.com",
    password : "correcthorsebatterystaple"
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });

};

CreateUserService.$inject = ['$http'];

export default CreateUserService;