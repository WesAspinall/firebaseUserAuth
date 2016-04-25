let CreateUserController = function(CreateUserService, $scope, $firebaseAuth, FIREBASE_URL){

  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);

  $scope.login = function(){
    $scope.message = "Welcome" + $scope.user.email;
  };

  $scope.register = function(){
    auth.$createUser({
      email: $scope.user.email,
      password: $scope.user.password
    }).then(function(regUser){
      $scope.message = "Hi" + $scope.user.firstname;
    }).catch(function(error){
      $scope.message = error.message;
    });//createUser
  };//register
};//controller

CreateUserController.$inject = ['CreateUserService', '$scope' ,'$firebaseAuth', 'FIREBASE_URL'];

export default CreateUserController;