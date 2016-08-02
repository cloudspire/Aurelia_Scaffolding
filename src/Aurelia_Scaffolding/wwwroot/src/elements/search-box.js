System.register(["aurelia-framework", "../models/session", "../models/text_prediction"], function(exports_1, context_1) {
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
    var aurelia_framework_1, session_1, text_prediction_1;
    var SearchBox;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            },
            function (text_prediction_1_1) {
                text_prediction_1 = text_prediction_1_1;
            }],
        execute: function() {
            let SearchBox = class SearchBox {
                constructor(session) {
                    this.session = session;
                    this.input_changed = (item) => {
                        var val = item.target.value;
                        this.val = val;
                        var items = this.trie.find(val);
                        this.list_items = items == null ? [] : items;
                        if (this.list_items.length > 0) {
                            this.list_style = 'display: block; width: ' + this.width + 'px;';
                        }
                        else {
                            this.list_style = 'display: none; width: ' + this.width + 'px;';
                        }
                    };
                    this.select_item = (item) => {
                        var val = $(item.target).text();
                        this.val = val;
                        this.list_style = 'display: none; width: ' + this.width + 'px;';
                    };
                    this.input_style = 'width: ' + this.width + 'px;';
                    this.list_style = 'display: none; width: ' + this.width + 'px;';
                    if (this.session.runtime['triejs_loaded']) {
                        this.load_trie();
                    }
                    else {
                        $.getScript('src/scripts/trie.js', (script) => {
                            this.session.runtime['triejs_loaded'] = true;
                            this.load_trie();
                        });
                    }
                }
                load_trie() {
                    this.trie = new Triejs();
                    this.predict = new text_prediction_1.PredictiveText();
                    this.predict.set_inputs(this.list_type);
                    for (var i = 0; i < this.predict.list.length; i++) {
                        this.trie.add(this.predict.list[i]);
                    }
                }
            };
            SearchBox = __decorate([
                aurelia_framework_1.bindable({ name: 'list_type', defaultValue: 'sample' }),
                aurelia_framework_1.bindable({ name: 'width', defaultValue: '200' }),
                aurelia_framework_1.bindable({ name: 'val', defaultValue: '', defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                aurelia_framework_1.inject(session_1.SessionData), 
                __metadata('design:paramtypes', [session_1.SessionData])
            ], SearchBox);
            exports_1("SearchBox", SearchBox);
        }
    }
});
