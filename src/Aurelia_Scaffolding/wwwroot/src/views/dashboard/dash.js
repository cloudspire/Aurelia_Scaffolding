System.register(['aurelia-framework', 'src/models/utilities'], function(exports_1, context_1) {
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
    var aurelia_framework_1, utilities_1;
    var Dash;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }],
        execute: function() {
            let Dash = class Dash {
                constructor(utils) {
                    this.utils = utils;
                    this.test_state = '';
                }
                test_modal() {
                    this.utils.showModal({
                        header: 'Welcome To the Aurelia Starter App',
                        header_type: 'text',
                        body: 'This modal is a sample modal, to see options visit Utilities.ts',
                        lockScreen: true
                    });
                }
                test_error() {
                    this.utils.fireException({
                        log: true,
                        info: "Testing Exception"
                    });
                }
                test_error_alert() {
                    this.utils.fireException({
                        log: true,
                        info: "Testing Error / Alert",
                        alert: {
                            header: 'Sample Error',
                            header_type: 'text',
                            body: 'This is where you would describe the error details',
                            lockScreen: true
                        }
                    });
                }
            };
            Dash = __decorate([
                aurelia_framework_1.inject(utilities_1.Utilities), 
                __metadata('design:paramtypes', [utilities_1.Utilities])
            ], Dash);
            exports_1("Dash", Dash);
        }
    }
});
