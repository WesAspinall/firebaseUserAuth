let CreateUserService = function(){

  let ref = new Firebase("https://waspnx.firebaseio.com");

  ref.authWithPassword({
    email    : "waspnx@gmail.com",
    password : "admin"
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });

};

CreateUserService.$inject = [];

export default CreateUserService;