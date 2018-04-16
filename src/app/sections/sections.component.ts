import { Component, EventEmitter , Output , ViewChild , ElementRef} from '@angular/core';

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.css']
})
export class SectionsComponent {
    // playerName;
    // playerAge: string;
    // here in view child we pass component name in brackets and then specify the local ref name
    @ViewChild('playerAge') playerAge: ElementRef;
    @Output() playerEntered = new EventEmitter<{playerName: string , playerAge: string}>();

    addTeamOnePlayers(nameInput: HTMLInputElement) {
        this.playerEntered.emit({playerName : nameInput.value, playerAge: this.playerAge.nativeElement.value});
      }
}
