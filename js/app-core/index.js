import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import FIREBASE_URL from './constants/firebase.constant';

angular
	.module('app.core',['ui.router'])
	.config(config)
	.constant('FIREBASE_URL', FIREBASE_URL)
;