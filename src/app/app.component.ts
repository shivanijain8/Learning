import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Training';
  playerElement = [{ type: 'sjkdbj', name: 'plmvhvhhvhayer', age: '23'}];
  addTeamOnePlayers(playerInfo: {playerName: string , playerAge: string}) {
    this.playerElement.push({
      type: 'Team1',
      name: playerInfo.playerName,
      age: playerInfo.playerAge,
    });
  }
}

