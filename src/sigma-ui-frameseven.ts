// UI FrameSeven Config
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2016 Sigma Frameworks
// @license     : MIT
import 'lodash';
import 'moment';
import 'numeral';
import 'kramed';
import 'framework7';
import './scripts/phonelib';
import './scripts/countries';
import './scripts/currencies';
import {FrameworkConfiguration} from "aurelia-framework";
import {FSConstants} from "./utils/fs-constants";
import {kramed} from "./utils/fs-utils";
import {FSApplication} from "./utils/fs-application";
import {FSValidationRenderer} from "./utils/fs-validation";

export function configure(aurelia: FrameworkConfiguration, configCallback) {
	// aurelia.container.registerHandler('ui-validator', container => container.get(UIValidationRenderer));

	///** Core **/
	aurelia.globalResources('./core/fs-viewport');
	aurelia.globalResources('./core/fs-page');
	aurelia.globalResources('./core/fs-content');
	aurelia.globalResources('./core/fs-list');

	///** Components **/
	// aurelia.globalResources('./components/ui-menu');
	// aurelia.globalResources('./components/ui-form');
	// aurelia.globalResources('./components/ui-ribbon');
	// aurelia.globalResources('./components/ui-panel');
	// aurelia.globalResources('./components/ui-login');
	// aurelia.globalResources('./components/ui-tree');
	// aurelia.globalResources('./components/ui-datagrid');
	// aurelia.globalResources('./components/ui-tab-panel');

	/** Inputs **/
	// aurelia.globalResources('./inputs/ui-button');
	// aurelia.globalResources('./inputs/ui-switch');
	// aurelia.globalResources('./inputs/ui-option');
	// aurelia.globalResources('./inputs/ui-input');
	// aurelia.globalResources('./inputs/ui-file');
	// aurelia.globalResources('./inputs/ui-phone');
	// aurelia.globalResources('./inputs/ui-markdown');
	// aurelia.globalResources('./inputs/ui-textarea');
	// aurelia.globalResources('./inputs/ui-input-dual');
	// aurelia.globalResources('./inputs/ui-combo');
	// aurelia.globalResources('./inputs/ui-tags');
	// aurelia.globalResources('./inputs/ui-language');
	// aurelia.globalResources('./inputs/ui-date');
	// aurelia.globalResources('./inputs/ui-date-view');
	// aurelia.globalResources('./inputs/ui-reorder');
	// aurelia.globalResources('./inputs/ui-list');

	/** Utils **/
	aurelia.globalResources('./utils/fs-converters');

	kramed.setOptions({
		renderer: new kramed.Renderer(),
		gfm: true,
		tables: true,
		breaks: true,
		pedantic: false,
		sanitize: false,
		smartLists: true,
		smartypants: false
	});

	var Configure = {
		title: (t) => {
			FSConstants.App.Title = t;
			return Configure;
		},
		version: (t) => {
			FSConstants.App.Version = t;
			return Configure;
		},
		appKey: (t) => {
			FSConstants.App.Key = t;
			return Configure;
		},
		apiUrl: (t) => {
			FSConstants.Http.BaseUrl = t;
			return Configure;
		},
		apiHeaders: (t) => {
			FSConstants.Http.Headers = t;
			return Configure;
		},
		addAuthHeader: (t) => {
			FSConstants.Http.AuthorizationHeader = t;
			return Configure;
		}
	}

	if (Framework7.prototype.device.ios) {
		Dom7('link[rel*="stylesheet"][title="ios"]')[0].disabled = false;
	}
	if (Framework7.prototype.device.android) {
		Dom7('link[rel*="stylesheet"][title="android"]')[0].disabled = false;
	}

	if (configCallback !== undefined && typeof configCallback === 'function') {
		configCallback(Configure);
	}
}

export {FSApplication} from "./utils/fs-application";
export {FSConstants} from "./utils/fs-constants";
export {FSEvent} from "./utils/fs-event";
export {FSFormat} from "./utils/fs-formatters";
export {FSHttpService} from "./utils/fs-http-service";
export {FSUtils, _, moment, numeral, kramed} from "./utils/fs-utils";
export {FSValidationRenderer, validatemap, validatephone} from "./utils/fs-validation";
