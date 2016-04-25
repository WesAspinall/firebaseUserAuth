// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

import angular from 'angular';
import './app-auth/index';
import './app-core/index';

angular
	.module('app',['app.auth', 'app.core'])
;