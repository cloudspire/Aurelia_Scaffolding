import {inject} from "aurelia-framework";
import {Router, RouterConfiguration} from "aurelia-router";
import 'bootstrap';

@inject(Router)
export class App {

    constructor(private router: Router) {
        this.appLoaded();
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