"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _large_files_large_files_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./large-files/large-files.component */ 3489);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AppComponent {
    constructor(primengConfig) {
        this.primengConfig = primengConfig;
        this.title = 'communication-protocols';
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-large-files")(1, "router-outlet");
    } }, directives: [_large_files_large_files_component__WEBPACK_IMPORTED_MODULE_0__.LargeFilesComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/listbox */ 3803);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _services_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/communication.service */ 9729);
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/websocket.service */ 8223);
/* harmony import */ var _services_webtransport_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/webtransport.service */ 2016);
/* harmony import */ var _large_files_large_files_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./large-files/large-files.component */ 3489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);













const config = { url: 'http://websocket.withoeft.nz:4444', options: {} };
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_services_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService, _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__.WebsocketService, _services_webtransport_service__WEBPACK_IMPORTED_MODULE_4__.WebtransportService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__.SocketIoModule.forRoot(config),
            primeng_listbox__WEBPACK_IMPORTED_MODULE_11__.ListboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _large_files_large_files_component__WEBPACK_IMPORTED_MODULE_5__.LargeFilesComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__.SocketIoModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_11__.ListboxModule] }); })();


/***/ }),

/***/ 3489:
/*!******************************************************!*\
  !*** ./src/app/large-files/large-files.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LargeFilesComponent": () => (/* binding */ LargeFilesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/communication.service */ 9729);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/listbox */ 3803);



class LargeFilesComponent {
    constructor(communicationsService) {
        this.communicationsService = communicationsService;
        this.files = [];
    }
    ngOnInit() {
        this.communicationsService.downloadFiles.subscribe(files => {
            this.files = files;
            this.files.sort();
        });
    }
    downloadFile(filename) {
        this.communicationsService.downloadFile(filename);
    }
}
LargeFilesComponent.ɵfac = function LargeFilesComponent_Factory(t) { return new (t || LargeFilesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService)); };
LargeFilesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LargeFilesComponent, selectors: [["app-large-files"]], decls: 3, vars: 1, consts: [[3, "options", "onDblClick"]], template: function LargeFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Gro\u00DFe Dateien zum Download (Doppelklick):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-listbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onDblClick", function LargeFilesComponent_Template_p_listbox_onDblClick_2_listener($event) { return ctx.downloadFile($event["value"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.files);
    } }, directives: [primeng_listbox__WEBPACK_IMPORTED_MODULE_2__.Listbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXJnZS1maWxlcy5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 9729:
/*!***************************************************!*\
  !*** ./src/app/services/communication.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunicationService": () => (/* binding */ CommunicationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ 8223);
/* harmony import */ var _webtransport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webtransport.service */ 2016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class CommunicationService {
    constructor(injector) {
        this.injector = injector;
        this.downloadFiles = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.websocket) {
            this.protocolService = this.injector.get(_websocket_service__WEBPACK_IMPORTED_MODULE_1__.WebsocketService);
        }
        else {
            this.protocolService = this.injector.get(_webtransport_service__WEBPACK_IMPORTED_MODULE_2__.WebtransportService);
        }
        this.protocolService.init(this.downloadFiles);
        this.protocolService.requestAvailableFiles(this.downloadFiles);
    }
    downloadFile(filename) {
        this.protocolService.downloadFile(filename);
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector)); };
CommunicationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CommunicationService, factory: CommunicationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8223:
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ 4935);


class WebsocketService {
    constructor(socket) {
        this.socket = socket;
        this.testDownloadSpeed = false;
        this.downloadCounter = 0;
    }
    init(downloadFiles) {
        console.log("Using WebSocketService");
        this.downloadFiles = downloadFiles;
        this.socket.connect();
        this.activateListeners();
    }
    sendMessage(message) {
        this.socket.emit('message', message);
    }
    activateListeners() {
        this.socket.on('message', (message) => {
            console.log("Received message via websocket: " + message);
        });
        this.socket.on('download-files-list', (message) => {
            this.downloadFiles.next(message);
        });
        this.socket.on('download-file', (filename, file) => {
            let blob = new Blob([file], { type: 'application/octet-stream' });
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            console.timeEnd("downloadFile");
            if (this.testDownloadSpeed && this.downloadCounter < 100) {
                this.downloadCounter++;
                this.downloadFile(filename);
            }
        });
    }
    requestAvailableFiles() {
        this.socket.emit('download-files-list');
    }
    downloadFile(filename) {
        console.time("downloadFile");
        this.socket.emit('download-file', filename);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__.Socket)); };
WebsocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2016:
/*!**************************************************!*\
  !*** ./src/app/services/webtransport.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebtransportService": () => (/* binding */ WebtransportService)
/* harmony export */ });
/* harmony import */ var G_Studium_Spezielle_Gebiete_zum_Softwareengineering_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class WebtransportService {
  constructor() {
    this.url = 'https://webtransport.withoeft.nz:4433/';
  }

  init(downloadFiles) {
    console.log("Using WebTransportService");
    this.connect();
    this.downloadFiles = downloadFiles;
  }

  connect() {
    var _this = this;

    return (0,G_Studium_Spezielle_Gebiete_zum_Softwareengineering_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.transport = new WebTransport(_this.url);
        console.log('Initiating connection...');
      } catch (e) {
        console.error('Failed to create connection object. ' + e, 'error');
        return;
      }

      try {
        yield _this.transport.ready;
        console.log('Connection ready.');
      } catch (e) {
        console.error('Connection failed. ' + e, 'error');
        return;
      }

      _this.transport.closed.then(() => {
        console.log('Connection closed normally.');
      }).catch(() => {
        console.error('Connection closed abruptly.', 'error');
      });

      _this.send('download-files-list');
    })();
  }

  send(message) {
    var _this2 = this;

    return (0,G_Studium_Spezielle_Gebiete_zum_Softwareengineering_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let encoder = new TextEncoder();
      let data = encoder.encode(message);
      let stream = yield _this2.transport.createBidirectionalStream();

      _this2.readFromIncomingStream(stream);

      let writer = stream.writable.getWriter();
      yield writer.write(data);
      yield writer.close();
    })();
  }

  readFromIncomingStream(stream) {
    return (0,G_Studium_Spezielle_Gebiete_zum_Softwareengineering_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let decoder = new TextDecoder();
      let reader = stream.readable.getReader();

      try {
        while (true) {
          const {
            value,
            done
          } = yield reader.read();

          if (done) {
            console.log('Stream #' + ' closed');
            return;
          }

          let data = decoder.decode(value);
          console.log('Received data on stream #' + ': ' + data);
        }
      } catch (e) {
        console.error('Error while reading from stream #' + ': ' + e, 'error');
      }
    })();
  }

  requestAvailableFiles(downloadFiles) {}

  downloadFile(filename) {}

}

WebtransportService.ɵfac = function WebtransportService_Factory(t) {
  return new (t || WebtransportService)();
};

WebtransportService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: WebtransportService,
  factory: WebtransportService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    websocket: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map