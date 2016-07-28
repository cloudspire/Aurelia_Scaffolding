import {inject, bindable} from 'aurelia-framework';
import {Utilities} from 'src/models/utilities';

@inject(Utilities)
export class Dash {

    constructor(private utils: Utilities) {
        var x = 1;
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
}