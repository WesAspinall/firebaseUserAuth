import angular from 'angular';

import CreateUserController from './controllers/createUser.controller';

angular
	.module('app.auth', [])
	.controller('CreateUserController', CreateUserController)

;