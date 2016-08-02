System.register(["aurelia-framework", "aurelia-router", "./models/utilities", "./models/session", 'bootstrap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, aurelia_router_1, utilities_1, session_1;
    var App;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_router_1_1) {
                aurelia_router_1 = aurelia_router_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            },
            function (_1) {}],
        execute: function() {
            let App = class App {
                constructor(router, utils, session) {
                    this.router = router;
                    this.utils = utils;
                    this.session = session;
                    this.loadRouter();
                    this.loadExceptionHandler();
                    this.appLoaded();
                }
                loadExceptionHandler() {
                    this.utils.addEventListener('exception', 'app.ts', (data) => {
                        if (data.alert != null) {
                            this.utils.showModal(data.alert);
                        }
                        if (data.log) {
                            console.error(data);
                        }
                    });
                }
                loadRouter() {
                    this.router.configure((config) => {
                        config.title = "Aurelia";
                        config.map([
                            { route: ['', 'dash'], name: 'dash', moduleId: './views/dashboard/dash', nav: true, title: 'Dashboard' },
                        ]);
                        return config;
                    });
                }
                appLoaded() {
                }
            };
            App = __decorate([
                aurelia_framework_1.inject(aurelia_router_1.Router, utilities_1.Utilities, session_1.SessionData), 
                __metadata('design:paramtypes', [aurelia_router_1.Router, utilities_1.Utilities, session_1.SessionData])
            ], App);
            exports_1("App", App);
        }
    }
});
