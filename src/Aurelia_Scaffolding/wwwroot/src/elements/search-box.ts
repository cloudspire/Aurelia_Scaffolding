import {inject, bindable, bindingMode} from "aurelia-framework";
import {SessionData} from "../models/session";
import {PredictiveText} from "../models/text_prediction";

@bindable({ name: 'list_type', defaultValue: 'sample' })
@bindable({ name: 'width', defaultValue: '200' })
@bindable({ name: 'val', defaultValue: '', defaultBindingMode: bindingMode.twoWay })
@inject(SessionData)
export class SearchBox {

    //bindable properties
    list_type: string;
    width: number;
    val: string;
    //template data
    list_items: any;
    //predictive text objects
    trie: Trie;
    predict: PredictiveText;
    // style properties
    list_style: string;
    input_style: string;

    constructor(private session: SessionData) {
        this.input_style = 'width: ' + this.width + 'px;';
        this.list_style = 'display: none; width: ' + this.width + 'px;';
        if (this.session.runtime['triejs_loaded']) {
            this.load_trie();
        } else {
            $.getScript('src/scripts/trie.js', (script: any) => {
                this.session.runtime['triejs_loaded'] = true;
                this.load_trie();
            });
        }
    }

    load_trie(): void {
        this.trie = new Triejs();
        this.predict = new PredictiveText();
        this.predict.set_inputs(this.list_type);
        for (var i = 0; i < this.predict.list.length; i++) {
            this.trie.add(this.predict.list[i]);
        }
    }

    input_changed = (item: any) => {
        var val = item.target.value;
        this.val = val;
        var items = this.trie.find(val);
        this.list_items = items == null ? [] : items;
        if (this.list_items.length > 0) {
            this.list_style = 'display: block; width: ' + this.width + 'px;';
        } else {
            this.list_style = 'display: none; width: ' + this.width + 'px;';
        }
    }

    select_item = (item: any) => {
        var val = $(item.target).text();
        this.val = val;
        this.list_style = 'display: none; width: ' + this.width + 'px;';
    }

}

// create interface for trie.js functions
export interface Trie {
    new (): Trie; 
    add(word: string): void;
    add(word: string, data: any): void;
    find(word: string): any;
}

declare var Triejs: Trie;