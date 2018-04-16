import { Component , Input} from '@angular/core';

@Component({
    selector: 'app-session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.css']
})

export class SessionComponent {
    @Input() element: {type: string, name: string , age: string };
}
