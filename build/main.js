webpackJsonp([0],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
var Environment = (function () {
    function Environment() {
    }
    return Environment;
}());

//# sourceMappingURL=environment.model.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment_environment_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_access_control_access_control__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__access_control_access_control__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, accessControl, storage, environment) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.accessControl = accessControl;
        this.storage = storage;
        this.environment = environment;
        this.user = {
            user: null,
            password: null
        };
        this.delegations = null;
        this.selectedDelegationCode = null;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        this.token = null;
        __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].forkJoin(this.storage.get('token'), this.storage.get('delegation')).subscribe(function (result) {
            _this.setToken(result[0]);
            if (result[1]) {
                _this.selectedDelegationCode = result[1].codigoDeDelegacion;
            }
        });
        this.accessControl.getTokenChanges().subscribe(function (result) {
            _this.setToken(result);
        });
        this.accessControl.getDelegations().subscribe(function (delegations) {
            _this.delegations = delegations;
        }, function (error) {
            alert("No se pudo obtener las sedes");
        });
    }
    LoginPage.prototype.setToken = function (token) {
        this.token = token;
        if (this.token) {
            var decoded = this.jwtHelper.decodeToken(token);
            this.user.user = decoded.sub;
            if (!this.jwtHelper.isTokenExpired(token))
                this.user.password = '*********';
        }
        else {
            this.user.user = '';
            this.user.password = '';
        }
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.isLogedIn = function () {
        var rv = false;
        if (!!this.token)
            rv = !this.jwtHelper.isTokenExpired(this.token);
        return rv;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.accessControl.login(this.user).subscribe(function (result) {
            var delegation = _this.delegations.filter(function (d) { return d.codigoDeDelegacion === _this.selectedDelegationCode; })[0];
            _this.storage.set('delegation', delegation);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__access_control_access_control__["a" /* AccessControlPage */]);
        }, function (error) {
            alert(error);
        }, function () {
        });
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.accessControl.logout().subscribe(function (result) {
            _this.storage.remove('delegation');
        }, function (error) {
        }, function () {
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cuenta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="login-form1">\n    <ion-list id="login-list2">\n        <ion-item id="login-select1">\n            <ion-label>\n              Sede\n            </ion-label>\n            <ion-select name="delegation" [(ngModel)]="selectedDelegationCode" [disabled]="!delegations">\n              <ion-option [value]="d.codigoDeDelegacion" *ngFor="let d of delegations">\n                {{d.delegacion}}\n              </ion-option>\n            </ion-select>\n            <!-- <ion-input type="email" placeholder="" name="user" [(ngModel)]="user.user" [disabled]="isLogedIn()"></ion-input> -->\n          </ion-item>\n      <ion-item id="login-input1">\n        <ion-label>\n          Usuario\n        </ion-label>\n        <ion-input type="email" placeholder="" name="user" [(ngModel)]="user.user" [disabled]="isLogedIn()"></ion-input>\n      </ion-item>      \n      <ion-item id="login-input2">\n        <ion-label>\n          Contraseña\n        </ion-label>\n        <ion-input type="password" placeholder="" name="password" [(ngModel)]="user.password" [disabled]="isLogedIn()"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="login-button1" ion-button color="calm" block [disabled]="!user.user || !user.password || isLogedIn()" (click)="login()">\n      Iniciar sesión\n    </button>\n    <button id="login-button1" ion-button color="danger" block [disabled]="!isLogedIn()" (click)="logout()">\n      Cerrar sesión\n    </button>\n  </form>\n  <div *ngIf="environment.ionicEnvName === \'dev\'">\n    {{environment | json}}\n  </div>\n</ion-content>'/*ion-inline-end:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_access_control_access_control__["a" /* AccessControlProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__environment_environment_model__["a" /* Environment */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_indentifierTypes_model__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_access_control_access_control__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__access_result_access_result__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberPage = (function () {
    function MemberPage(navCtrl, navParams, accessControl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accessControl = accessControl;
        this.member = null;
        this.delegation = null;
        this.member = navParams.get('member');
        this.delegation = navParams.get('delegation');
    }
    MemberPage.prototype.recordAccess = function () {
        var _this = this;
        "".trim();
        var access = {
            memberNumber: this.member.numeroDeAsistente,
            delegationCode: this.delegation.codigoDeDelegacion
        };
        this.accessControl.recordAccess(access).subscribe(function (result) {
            _this.accessControl.getMember(_this.member.numeroDeAsistente, __WEBPACK_IMPORTED_MODULE_2__shared_indentifierTypes_model__["a" /* IdentifierTypes */].MemberNumber).subscribe(function (member) {
                _this.showResult(member);
            });
        }, function (error) {
            _this.showResult(null, error);
        });
    };
    MemberPage.prototype.showResult = function (member, error) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__access_result_access_result__["a" /* AccessResultPage */], { member: member, error: error });
    };
    MemberPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return MemberPage;
}());
MemberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-member',template:/*ion-inline-start:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\member\member.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Socio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <ion-card>\n    <img src="assets/member-default.png" /> \n    <ion-card-header>\n      <h1>{{member.nombres}} {{ member.apellido}}</h1>\n      <p>Número: {{member.numeroDeAsistente}} </p>\n      <p>{{member.tipoDeDocumento}}: {{member.numeroDeDocumento}} </p>\n    </ion-card-header>\n    <ion-card-content [style.background-color]="member.color">     \n      <p>Fecha de nacimiento: {{member.fechaDeNacimiento | date:\'dd-MM-y\'}}</p>\n      <p>Fecha de alta: {{member.fechaDeAlta | date:\'dd-MM-y\'}}</p>\n      <p *ngIf="member.fechaDeBaja">Fecha de baja: {{member.fechaDeBaja | date:\'dd-MM-y\'}}</p>\n      <p *ngIf="member.domicilio">Domicilio: {{member.domicilio}}</p>\n      <p *ngIf="member.categoria">Categoría: {{member.categoria}}</p>\n      <p *ngIf="member.fechaHastaAptoFisico">Apto físico hasta: {{member.fechaHastaAptoFisico | date:\'dd-MM-y HH:mm:ss\'}}</p>\n      <p *ngIf="member.fechaDeUltimoAcceso">Último acceso: {{member.fechaDeUltimoAcceso | date:\'dd-MM-y HH:mm:ss\'}}</p>\n      <p *ngIf="member.delegacionDeUltimoAcceso && member.delegacionDeUltimoAcceso.trim() != \'\'">Delegación último acceso: {{member.delegacionDeUltimoAcceso}}</p>\n      <p>Estado: {{member.estado}}</p>      \n      <p *ngIf="member.motivoDeInhabilitacion">Motivo de inhabilitación: {{member.motivoDeInhabilitacion}}</p>    \n      \n    </ion-card-content>\n  </ion-card>\n  <!-- <button id="member-button8" ion-button color="assertive" block>\n    Cancelar\n  </button> -->\n  <button id="member-button9" ion-button color="positive" block (click)="recordAccess()">\n    Registrar ingreso\n  </button>\n\n  <button ion-button color="positive" block outline (click)="back()">\n    Cancelar\n  </button>\n</ion-content>'/*ion-inline-end:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\member\member.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_access_control_access_control__["a" /* AccessControlProvider */]])
], MemberPage);

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentifierTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IdentifierTypesNames; });
var IdentifierTypes;
(function (IdentifierTypes) {
    IdentifierTypes[IdentifierTypes["MemberNumber"] = 0] = "MemberNumber";
    IdentifierTypes[IdentifierTypes["Document"] = 1] = "Document";
})(IdentifierTypes || (IdentifierTypes = {}));
;
var IdentifierTypesNames = [
    { key: IdentifierTypes.MemberNumber, text: 'Código de socio' },
    { key: IdentifierTypes.Document, text: 'DNI' }
];
//# sourceMappingURL=indentifierTypes.model.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__access_control_access_control__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AccessResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccessResultPage = (function () {
    function AccessResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.member = null;
        this.error = null;
        this.member = navParams.get('member');
        this.error = navParams.get('error');
    }
    AccessResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccessResultPage');
    };
    AccessResultPage.prototype.close = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__access_control_access_control__["a" /* AccessControlPage */]);
    };
    return AccessResultPage;
}());
AccessResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-access-result',template:/*ion-inline-start:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\access-result\access-result.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Registro de ingreso\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <ion-card>    \n    <ion-card-content>            \n      <div *ngIf="!error">\n        <h1>El ingreso se registro correctamente</h1>\n        <p>{{member.nombres}} {{ member.apellido}}</p>\n        <p *ngIf="member.fechaDeUltimoAcceso">{{member.fechaDeUltimoAcceso | date:\'dd-MM-y HH:mm:ss\'}}</p>\n        <p *ngIf="member.delegacionDeUltimoAcceso && member.delegacionDeUltimoAcceso.trim() != \'\'">Sede {{member.delegacionDeUltimoAcceso}}</p>\n      </div>      \n      <div *ngIf="error">\n        {{error}}\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <button  ion-button color="positive" block (click)="close()">\n    Volver\n  </button>\n</ion-content>'/*ion-inline-end:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\access-result\access-result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AccessResultPage);

//# sourceMappingURL=access-result.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeReadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_access_control_access_control__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_barcode_decoder_barcode_decoder__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BarcodeReadingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//declare var Quagga:any;
var BarcodeReadingPage = (function () {
    function BarcodeReadingPage(navCtrl, navParams, decoder, accessControl, viewCtrl, ref) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.decoder = decoder;
        this.accessControl = accessControl;
        this.viewCtrl = viewCtrl;
        this.ref = ref;
        this.code$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.devices = [];
        this.selected = null;
    }
    BarcodeReadingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.decoder.onDevicesUpdated().subscribe(function (devices) {
            _this.devices = devices;
            console.log('onDevicesUpdated', devices);
        }, function (error) {
            console.log(error);
        });
        this.decoder.onLiveStreamInit();
        this.decoder.onDecodeProcessed();
        var self = this;
        var callback = function (code) {
            console.log("page read", { code: code, self: self });
            self.lastResult = code;
            self.decoder.onPlaySound();
            self.code$.next(code);
            self.ref.detectChanges();
        };
        var errorCallback = function (err) {
            console.log('page read error', err);
            self.error = "Error: " + err;
        };
        this.decoder.onDecodeDetected(callback, errorCallback);
        // this.decoder.onDecodeDetected().subscribe(
        //   code => {
        //     console.log("page read", code);
        //     this.lastResult = code;
        //     this.decoder.onPlaySound();
        //     this.code$.next(code);
        //   },
        //   err => {
        //     console.log('page read error', err);
        //     this.error = `Error: ${err}`
        //   },
        //   () => {}
        // );
    };
    BarcodeReadingPage.prototype.ngAfterContentInit = function () {
        this.interactive.nativeElement.children[0].style.position = 'absolute';
    };
    BarcodeReadingPage.prototype.ngOnDestroy = function () {
        this.decoder.onDecodeStop();
    };
    BarcodeReadingPage.prototype.selectedDeviceOnChange = function ($event) {
        this.selected = $event;
        this.decoder.onDecodeStop();
        this.decoder.onLiveStreamInit($event);
    };
    BarcodeReadingPage.prototype.confirm = function () {
        this.viewCtrl.dismiss(this.lastResult);
    };
    BarcodeReadingPage.prototype.cancel = function () {
        this.viewCtrl.dismiss(null);
    };
    return BarcodeReadingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('interactive'),
    __metadata("design:type", Object)
], BarcodeReadingPage.prototype, "interactive", void 0);
BarcodeReadingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-barcode-reading',template:/*ion-inline-start:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\barcode-reading\barcode-reading.html"*/'<!--\n  Generated template for the BarcodeReadingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Leer código</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label>\n            Seleccione cámara\n        </ion-label>\n        <ion-select name="selected" [ngModel]="selected" (ngModelChange)="selectedDeviceOnChange($event)">\n            <ion-option [value]="d.deviceId" *ngFor="let d of devices">\n                {{d.label}}\n            </ion-option>\n        </ion-select>\n    </ion-item>\n    <div>\n        <div id="interactive" class="viewport clearfix" #interactive></div>\n\n        <div class="show__sm" *ngIf="lastResult">\n            <p>Sú código es</p>\n            <p>{{ lastResult}}</p>\n        </div>\n    </div>\n\n\n    <button id="member-button9" ion-button color="positive" block (click)="confirm()" [disabled]="!lastResult">\n        Confirmar\n    </button>\n    <button id="member-button10" ion-button color="positive" block (click)="cancel()">\n            Cancelar\n        </button>\n\n</ion-content>'/*ion-inline-end:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\barcode-reading\barcode-reading.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_barcode_decoder_barcode_decoder__["a" /* BarcodeDecoderProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_access_control_access_control__["a" /* AccessControlProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
], BarcodeReadingPage);

//# sourceMappingURL=barcode-reading.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeDecoderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Quagga__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Quagga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Quagga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment_decode_config__ = __webpack_require__(585);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the BarDecoderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BarcodeDecoderProvider = (function () {
    function BarcodeDecoderProvider() {
        this.sound = new Audio('assets/barcode.wav');
        this.code$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
    }
    BarcodeDecoderProvider.prototype.onDevicesUpdated = function () {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromPromise(__WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.CameraAccess.enumerateVideoDevices());
    };
    BarcodeDecoderProvider.prototype.onDecodeSingle = function (src) {
        __WEBPACK_IMPORTED_MODULE_4__environment_decode_config__["a" /* DECODER_CONFIG */].src = src;
        // Promisify DecodeSingle method from Quagga
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.decodeSingle(__WEBPACK_IMPORTED_MODULE_4__environment_decode_config__["a" /* DECODER_CONFIG */], function (result) {
                if (!result || typeof result.codeResult === 'undefined') {
                    reject('File Cannot be Decode, Please Try a Valid Barcode;');
                }
                resolve(result.codeResult.code);
            });
        });
    };
    BarcodeDecoderProvider.prototype.setLiveStreamConfig = function (deviceId) {
        __WEBPACK_IMPORTED_MODULE_4__environment_decode_config__["b" /* DECODER_LIVE_CONFIG */].inputStream = {
            type: "LiveStream",
            constraints: {
                width: { min: 640 },
                height: { min: 480 },
                facingMode: "environment",
                aspectRatio: {
                    min: 1,
                    max: 2
                },
                deviceId: deviceId ? deviceId : undefined
            }
        };
        return __WEBPACK_IMPORTED_MODULE_4__environment_decode_config__["b" /* DECODER_LIVE_CONFIG */];
    };
    BarcodeDecoderProvider.prototype.onLiveStreamInit = function (deviceId) {
        var state = this.setLiveStreamConfig(deviceId);
        console.log("onLiveStreamInit", state);
        __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.init(state, function (err) {
            if (err) {
                return console.error(err);
            }
            __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.start();
        });
        var self = this;
    };
    BarcodeDecoderProvider.prototype.onProcessed = function (result) {
        var drawingCtx = __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.canvas.ctx.overlay, drawingCanvas = __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.canvas.dom.overlay;
        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.ImageDebug.drawPath(box, {
                        x: 0,
                        y: 1
                    }, drawingCtx, {
                        color: "green",
                        lineWidth: 2
                    });
                });
            }
            if (result.box) {
                __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.ImageDebug.drawPath(result.box, {
                    x: 0,
                    y: 1
                }, drawingCtx, {
                    color: "#00F",
                    lineWidth: 2
                });
            }
            if (result.codeResult && result.codeResult.code) {
                console.log('procesed', result);
                __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.ImageDebug.drawPath(result.line, {
                    x: 'x',
                    y: 'y'
                }, drawingCtx, {
                    color: 'red',
                    lineWidth: 3
                });
            }
        }
    };
    BarcodeDecoderProvider.prototype.onDecodeProcessed = function () {
        __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.onProcessed(this.onProcessed);
    };
    BarcodeDecoderProvider.prototype.onDecodeDetected = function (callback, errorCallback) {
        __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.onDetected(function (result) {
            console.log('detected', result);
            if (!result || typeof result.codeResult === 'undefined') {
                if (errorCallback)
                    errorCallback('Cannot be Detected, Please Try again!');
                //self.code$.error('Cannot be Detected, Please Try again!')
                //observer.error('Cannot be Detected, Please Try again!');
                //observer.complete();
                //reject('Cannot be Detected, Please Try again!');
            }
            else {
                if (callback)
                    callback(result.codeResult.code);
                //self.code$.next(result.codeResult.code);
                // observer.next(result.codeResult.code);
                // observer.complete();
            }
            //self.code$.complete();
        });
    };
    BarcodeDecoderProvider.prototype.onDecodeStop = function () {
        __WEBPACK_IMPORTED_MODULE_3_Quagga___default.a.stop();
        console.info('Camera Stopped Working!');
    };
    BarcodeDecoderProvider.prototype.onPlaySound = function () {
        this.sound.play();
    };
    return BarcodeDecoderProvider;
}());
BarcodeDecoderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BarcodeDecoderProvider);

//# sourceMappingURL=barcode-decoder.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingSpinnerProvider = (function () {
    function LoadingSpinnerProvider(loading) {
        this.loading = loading;
        this.loader = null;
    }
    LoadingSpinnerProvider.prototype.show = function () {
        if (!this.loader) {
            this.loader = this.loading.create({
                content: "Espere por favor..."
            });
            this.loader.present();
        }
    };
    LoadingSpinnerProvider.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            if (_this.loader) {
                _this.loader.dismiss().then(function (result) {
                    _this.loader = null;
                }, function (error) { console.log('Spinner error', error); });
            }
        }, delay);
    };
    return LoadingSpinnerProvider;
}());
LoadingSpinnerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], LoadingSpinnerProvider);

//# sourceMappingURL=loading-spinner.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(275);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_jwt__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_http_interceptor__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environment_environment_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_access_control_access_control__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_member_member__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_barcode_reading_barcode_reading__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_access_result_access_result__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_access_control_access_control__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_barcode_decoder_barcode_decoder__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_loading_spinner_loading_spinner__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















function getAuthHttp(http, storage) {
    return new __WEBPACK_IMPORTED_MODULE_8_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_8_angular2_jwt__["AuthConfig"]({
        headerPrefix: 'Bearer',
        noJwtError: true,
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return storage.get('token'); }),
    }), http);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_access_control_access_control__["a" /* AccessControlPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["a" /* MemberPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_barcode_reading_barcode_reading__["a" /* BarcodeReadingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_access_result_access_result__["a" /* AccessResultPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_9_ng_http_interceptor__["a" /* HttpInterceptorModule */],
            __WEBPACK_IMPORTED_MODULE_10__environment_environment_module__["a" /* EnvironmentModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_access_control_access_control__["a" /* AccessControlPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["a" /* MemberPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_barcode_reading_barcode_reading__["a" /* BarcodeReadingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_access_result_access_result__["a" /* AccessResultPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_barcode_decoder_barcode_decoder__["a" /* BarcodeDecoderProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_access_control_access_control__["a" /* AccessControlProvider */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_8_angular2_jwt__["AuthHttp"],
                useFactory: getAuthHttp,
                deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]]
            },
            __WEBPACK_IMPORTED_MODULE_19__providers_loading_spinner_loading_spinner__["a" /* LoadingSpinnerProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environmentFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_model__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__development__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__production__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Typescript compiler will complain without this
function environmentFactory() {
    return  false ? prodVariables : __WEBPACK_IMPORTED_MODULE_2__development__["a" /* devVariables */];
}
var EnvironmentModule = (function () {
    function EnvironmentModule() {
    }
    return EnvironmentModule;
}());
EnvironmentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__environment_model__["a" /* Environment */],
                // useFactory instead of useValue so we can easily add more logic as needed.
                useFactory: environmentFactory
            }
        ]
    })
], EnvironmentModule);

//# sourceMappingURL=environment.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return devVariables; });
var devVariables = {
    apiEndpoint: 'http://localhost:57192/api',
    environmentName: 'Development Environment',
    ionicEnvName: 'dev'
};
//# sourceMappingURL=development.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prodVariables */
var prodVariables = {
    apiEndpoint: '/api/',
    environmentName: 'Production Environment',
    ionicEnvName: 'prod'
};
//# sourceMappingURL=production.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_http_interceptor__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_access_control_access_control__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loading_spinner_loading_spinner__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_access_control_access_control__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, httpInterceptor, accessControl, loadingSpinnerProvider) {
        var _this = this;
        this.storage = storage;
        this.accessControl = accessControl;
        this.loadingSpinnerProvider = loadingSpinnerProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        this.token = null;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["JwtHelper"]();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        var pendingRequestCount = 0;
        httpInterceptor.request().addInterceptor(function (data, method) {
            pendingRequestCount++;
            loadingSpinnerProvider.show();
            //console.log(method, data);
            return data;
        });
        httpInterceptor.response().addInterceptor(function (res, method) {
            return res.do(function (r) {
                pendingRequestCount--;
                if (pendingRequestCount == 0)
                    loadingSpinnerProvider.hide();
            });
        });
        httpInterceptor.response().addInterceptor(function (res) {
            return res.catch(function (e) {
                pendingRequestCount--;
                if (pendingRequestCount == 0)
                    loadingSpinnerProvider.hide();
                alert('Error, revise si el dispositivo está conectado a internet');
                return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].empty(); // Recover from error
            });
        });
        this.accessControl.getTokenChanges().subscribe(function (result) {
            _this.token = result;
            if (_this.isLogedIn())
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_access_control_access_control__["a" /* AccessControlPage */];
        });
    }
    MyApp.prototype.isLogedIn = function () {
        var rv = false;
        if (!!this.token)
            rv = !this.jwtHelper.isTokenExpired(this.token);
        return rv;
    };
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToAccessControl = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_access_control_access_control__["a" /* AccessControlPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToLogin()" id="menu-list-item1">\n        Usuario\n        <ion-icon name="person" item-right></ion-icon>\n      </ion-item>\n      <ion-item-sliding>\n        <ion-item color="none" menuClose="" on-click="goToAccessControl()" id="menu-list-item8">\n            <!-- *ngIf="isLogedIn()" -->\n          <ion-icon name="walk" item-left></ion-icon>\n          Control de acceso\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="positive"></button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7_ng_http_interceptor__["b" /* HttpInterceptorService */], __WEBPACK_IMPORTED_MODULE_9__providers_access_control_access_control__["a" /* AccessControlProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_loading_spinner_loading_spinner__["a" /* LoadingSpinnerProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessControlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environment_environment_model__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the AccessControlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AccessControlProvider = (function () {
    function AccessControlProvider(http, authHttp, storage, environment) {
        var _this = this;
        this.http = http;
        this.authHttp = authHttp;
        this.storage = storage;
        this.environment = environment;
        this.tokens = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
        this.storage.get('token').then(function (result) {
            _this.tokens.next(result);
        });
    }
    AccessControlProvider.prototype.login = function (user) {
        var _this = this;
        var url = this.environment.apiEndpoint + '/auth/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // let options = new RequestOptions();
        // options.headers.append('Content-Type', 'application/json');
        return this.authHttp.post(url, JSON.stringify(user), options).map(function (res) {
            var obj = res.json();
            _this.storage.set('token', obj.token);
            _this.tokens.next(obj.token);
            // this.token = obj.token;
            // console.log('login',obj);
            return {};
        });
    };
    AccessControlProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) {
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(_this.storage.remove('token')).subscribe(function (result) {
                _this.tokens.next('');
                observer.next(true);
                observer.complete();
            }, function (error) {
                observer.next(false);
                observer.complete();
            });
        });
    };
    AccessControlProvider.prototype.getTokenChanges = function () {
        return this.tokens.asObservable();
    };
    AccessControlProvider.prototype.getMember = function (identifier, indetifierType) {
        var url = this.environment.apiEndpoint + '/members/' + identifier + '?indetifierType=' + indetifierType;
        // if(memberNumber)
        //   url+=`?membernumber=${memberNumber}`;
        // if(document)
        //   url+=`?documentnumber=${document}`;
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });    
        // let options = new RequestOptions({ headers: headers });
        return this.authHttp.get(url).map(function (response) {
            var rv = response.json();
            console.log(rv);
            return rv;
        });
    };
    AccessControlProvider.prototype.getDelegations = function () {
        var url = this.environment.apiEndpoint + '/delegations/';
        return this.http.get(url).map(function (resp) {
            var rv = resp.json();
            return rv;
        });
    };
    AccessControlProvider.prototype.recordAccess = function (access) {
        var url = this.environment.apiEndpoint + '/access/';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        //headers.append('Authorization','Bearer ' + this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        // let options = new RequestOptions();
        // options.headers.append('Content-Type', 'application/json');
        return this.authHttp.post(url, JSON.stringify(access), options).map(function (res) {
            return 'El acceso se registró correctamente';
        });
    };
    return AccessControlProvider;
}());
AccessControlProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__environment_environment_model__["a" /* Environment */]])
], AccessControlProvider);

//# sourceMappingURL=access-control.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DECODER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECODER_LIVE_CONFIG; });
var DECODER_CONFIG;
DECODER_CONFIG = {
    inputStream: {
        size: 800
    },
    locator: {
        patchSize: "medium",
        halfSample: false
    },
    numOfWorkers: 1,
    decoder: {
        readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
            'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader']
    },
    locate: true,
    src: null
};
var DECODER_LIVE_CONFIG;
DECODER_LIVE_CONFIG = {
    locator: {
        patchSize: "medium",
        halfSample: false
    },
    numOfWorkers: 1,
    decoder: {
        readers: ['ean_reader', 'code_128_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader',
            'codabar_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader']
    },
    locate: true,
};
//# sourceMappingURL=decode-config.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessControlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_member__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__barcode_reading_barcode_reading__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_access_control_access_control__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_indentifierTypes_model__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccessControlPage = (function () {
    function AccessControlPage(navCtrl, accessControl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.accessControl = accessControl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.selectedIdentifierType = __WEBPACK_IMPORTED_MODULE_6__shared_indentifierTypes_model__["a" /* IdentifierTypes */].MemberNumber;
        this.inputValue = null;
        this.identifierTypesNames = __WEBPACK_IMPORTED_MODULE_6__shared_indentifierTypes_model__["b" /* IdentifierTypesNames */];
        this.identifierTypes = __WEBPACK_IMPORTED_MODULE_6__shared_indentifierTypes_model__["a" /* IdentifierTypes */];
        this.delegation = null;
    }
    AccessControlPage.prototype.toggleIdentifierType = function () {
        if (this.selectedIdentifierType === __WEBPACK_IMPORTED_MODULE_6__shared_indentifierTypes_model__["a" /* IdentifierTypes */].Document)
            this.selectedIdentifierType = __WEBPACK_IMPORTED_MODULE_6__shared_indentifierTypes_model__["a" /* IdentifierTypes */].MemberNumber;
        else
            this.selectedIdentifierType = __WEBPACK_IMPORTED_MODULE_6__shared_indentifierTypes_model__["a" /* IdentifierTypes */].Document;
    };
    AccessControlPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('delegation').then(function (result) {
            _this.delegation = result;
        });
    };
    AccessControlPage.prototype.presentBarcodeReadingPage = function () {
        var _this = this;
        var barcodeReadingPageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__barcode_reading_barcode_reading__["a" /* BarcodeReadingPage */]);
        barcodeReadingPageModal.onDidDismiss(function (data) {
            if (data) {
                _this.inputValue = data;
                _this.getMember();
            }
        });
        barcodeReadingPageModal.present();
    };
    AccessControlPage.prototype.readBarcode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__barcode_reading_barcode_reading__["a" /* BarcodeReadingPage */]);
    };
    AccessControlPage.prototype.getMember = function () {
        var _this = this;
        this.accessControl.getMember(+this.inputValue, this.selectedIdentifierType).subscribe(function (response) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__member_member__["a" /* MemberPage */], { member: response, delegation: _this.delegation });
        }, function (error) {
            alert(error);
        });
    };
    return AccessControlPage;
}());
AccessControlPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-access-control',template:/*ion-inline-start:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\access-control\access-control.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      {{delegation ? delegation.delegacion : \'\'}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6><button ion-button full (click)="toggleIdentifierType()" [color]="selectedIdentifierType === identifierTypes.MemberNumber ? \'secondary\' : \'light\'">#</button></ion-col>\n      <ion-col col-6><button ion-button full (click)="toggleIdentifierType()" [color]="selectedIdentifierType === identifierTypes.Document ? \'secondary\' : \'light\'">DNI</button></ion-col>\n    </ion-row>\n  </ion-grid>\n  <form id="accessControl-form4">\n    <!-- <ion-item id="accessControl-select2">\n      <ion-label>\n        Seleccione\n      </ion-label>\n      <ion-select name="selectedIdentifierType" [(ngModel)]="selectedIdentifierType">\n        <ion-option [value]="t.key" *ngFor="let t of identifierTypesNames">\n          {{t.text}}\n        </ion-option>\n      </ion-select>\n    </ion-item> -->\n    <ion-item id="accessControl-input7">\n      <ion-label>\n        Ingresar\n      </ion-label>\n      <ion-input type="text" placeholder="" [disabled]="selectedIdentifierType === null || selectedIdentifierType === undefined"\n        name="inputValue" [(ngModel)]="inputValue"></ion-input>\n    </ion-item>\n    <button ion-item *ngIf="selectedIdentifierType === identifierTypes.MemberNumber" (click)="presentBarcodeReadingPage()">\n      <ion-icon name="barcode"></ion-icon>\n      Lector de código\n    </button>\n    <!-- <button id="accessControl-button7" ion-button color="stable" block small *ngIf="selected == \'code\'">\n      Código de barra\n    </button> -->\n  </form>\n\n\n  <button id="accessControl-button5" ion-button color="positive" block [disabled]="!inputValue" (click)="getMember()">\n    Consultar estado\n  </button>\n\n</ion-content>'/*ion-inline-end:"D:\NProjects\mn.sportivoAccessControl\SportivoAccessControl.PWA\src\pages\access-control\access-control.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_access_control_access_control__["a" /* AccessControlProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], AccessControlPage);

//# sourceMappingURL=access-control.js.map

/***/ })

},[270]);
//# sourceMappingURL=main.js.map