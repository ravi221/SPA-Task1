import { Component } from '@angular/core';
import myGlobals = require('./globals'); 

@Component({
    selector: 'my-app',
    styleUrls: ['themes/' + myGlobals.themeName + '/css/theme.css'],
    templateUrl: 'themes/' + myGlobals.themeName + '/index.tpl.html',

})
export class AppComponent { 
	
}