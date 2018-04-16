import { Component } from '@angular/core';

@Component({
    selector: 'app-learning',
    templateUrl: './learning.component.html',
    styleUrls: ['./learning.component.css']
})

export class LearningComponent {
    constructor() {
        setTimeout(() => {
            this.allowButton = false;
        }, 2000);
    }
    type1: String = 'String interpolation';
    addValue: String;
    allowButton = true;
    showText = false;
    sectionsName: String = 'section3';
    randomNumber: number;
    textValue: String;
    sections: String[] = ['section1', 'section2'];
    teams1 = [];
    teams2 = [];
    playerName = '';
    playerAge: number;
    getString() {
        this.addValue = 'String interpolation from function';
        return this.addValue;
    }
    onButtonClick() {
        this.showText = !this.showText;
        if ( this.showText === true) {
                    this.textValue = 'hide';
        }
    }
    getColor() {
        this.randomNumber = Math.random();
        return this.randomNumber > 0.5 ? 'green' : 'red' ;
    }
}
