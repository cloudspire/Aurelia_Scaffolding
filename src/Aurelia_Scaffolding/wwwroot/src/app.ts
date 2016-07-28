import {inject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";
import {Utilities} from "./models/utilities";
import 'bootstrap';
import $ from 'jquery';

@inject(Router, Utilities)
export class App {

    constructor(private router: Router, private utils: Utilities) {
        this.loadExceptionHandler();
        this.appLoaded();
    }

    private loadExceptionHandler() {
        this.utils.addEventListener('exception', 'app.ts', (data: any) => {
            if (data.alert != null) {
                this.utils.showModal(data.alert);
            }
            if (data.log) {
                console.error(data);
            }
        });
    }

    private appLoaded() {
        this.router.configure((config: RouterConfiguration): RouterConfiguration => {
            config.title = "Aurelia";
            config.map([
                { route: ['', 'dash'], name: 'dash', moduleId: './views/dashboard/dash', nav: true, title: 'Dashboard' },

            ]);
            return config;
        });
    }
}