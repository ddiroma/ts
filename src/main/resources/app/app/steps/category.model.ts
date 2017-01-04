import {Step} from "./step/step";

export class Category {
    name: String;
    steps: Array<Step> = [];

    constructor(name: String) {
        this.name = name;
    }
}