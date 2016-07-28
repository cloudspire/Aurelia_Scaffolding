System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Utilities;
    return {
        setters:[],
        execute: function() {
            class Utilities {
                constructor() {
                    // event listener functions
                    this.events = [];
                }
                // sequencing functions
                afterSeries(times, func) {
                    return () => {
                        if (--times < 1) {
                            return func.apply(this, arguments);
                        }
                    };
                }
                ;
                addEventListener(event, caller, callback) {
                    if (this.events[event] == null) {
                        this.events[event] = [];
                        this.events[event].count = 0;
                    }
                    if (this.events[event][caller] == null) {
                        this.events[event][caller] = callback;
                        this.events[event].count++;
                    }
                }
                dropEventListener(event, caller) {
                    if (this.events[event] != null) {
                        if (this.events[event][caller] != null) {
                            delete this.events[event][caller];
                            this.events[event].count--;
                        }
                    }
                }
                fireEvent(event, data = null) {
                    if (this.events[event] != null) {
                        var keys = Object.keys(this.events[event]);
                        for (var i = 0; i < keys.length; i++) {
                            var key = keys[i];
                            if (key !== "count") {
                                if (data != null) {
                                    this.events[event][key](data);
                                }
                                else {
                                    this.events[event][key]();
                                }
                            }
                            ;
                        }
                    }
                    else {
                        console.warn("No event found matching the event: " + event);
                    }
                }
                fireException(data) {
                    this.fireEvent("exception", data);
                }
                // modal functions
                showModal(data) {
                    if (data.header == null) {
                        return;
                    }
                    else if (data.header_type === "text") {
                        $(".modal-title", $("#genericModal_Content")).text(data.header);
                    }
                    else {
                        $(".modal-header", $("#genericModal_Content")).html(data.header);
                    }
                    if (data.body == null) {
                        return;
                    }
                    else {
                        $(".modal-body", $("#genericModal_Content")).html(data.body);
                    }
                    if (data.footer == null) {
                        $("#genericModal_OK").show();
                        if (data.footer_text != null) {
                            $("#genericModal_OK").text(data.footer_text);
                        }
                    }
                    else {
                        $("#genericModal_OK").hide();
                        $("#genericModal_Cancel").hide();
                        $(".modal-footer", $("#genericModal_Content")).html(data.footer);
                    }
                    if (data.allowCancel) {
                        $("#genericModal_Cancel").show();
                    }
                    else {
                        $("#genericModal_Cancel").hide();
                    }
                    $("#genericModal_OK").unbind("click");
                    if (data.onClose != null) {
                        $("#genericModal_OK").click(data.onClose);
                    }
                    if (data.lockScreen) {
                        $("#genericModal").modal({ "backdrop": "static" });
                    }
                    else {
                        $("#genericModal").modal();
                    }
                }
            }
            exports_1("Utilities", Utilities);
        }
    }
});
