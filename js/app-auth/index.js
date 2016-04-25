import angular from 'angular';

import CreateUserController from './controllers/createUser.controller';
import CreateUserService from './services/createUser.service';

angular
	.module('app.auth', [])
	.controller('CreateUserController', CreateUserController)
	.service('CreateUserService', CreateUserService)
;