import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './stage.component.html',
  styleUrls: ['./app.component.css']
})
export class StageComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

export interface Stage {
  route_no: string;
  stageArray: string;
}
const STAGE_DATA: Stage[] = [
{route_no:'05C', stageArray : 'BROADWAY,CENTRAL,P.OR & SONS,WESLEY H.S,C.I.T.COLONY,ADYAR GATE,KOTTURPURAM,KOTTUR NSK STATUE,WOMEN\'S POLYTECHNIC,TARAMANI'},
{route_no:'05CGS', stageArray : 'BROADWAY,CENTRAL,P.OR & SONS,WESLEY H.S,C.I.T.COLONY,ADYAR GATE,KOTTURPURAM,KOTTUR NSK STATUE,WOMEN\'S POLYTECHNIC,TARAMANI'},
{route_no:'07E', stageArray : 'BROADWAY,CENTRAL,CHOOLAI P.O,KELLEYS,KILPAUK GARDEN,ANNA NAGAR CIRCLE,THIRUMANGALAM,MOGAIPAIR ROAD JN.,J.J.NAGAR WEST,AMBATHUR ESTATE'},
{route_no:'07HET', stageArray : 'BROADWAY,CENTRAL,DOVETON,KELLEYS,KILPAUK GARDEN,ANNA NAGAR CIRCLE,THIRUMANGALAM,FIRE STATION,J.J.NAGAR EAST,J.J.NAGAR WEST,AMBATHUR ESTATE'},
{route_no:'08C', stageArray : 'V. NAGAR,P1.POLICE STATION,GANESH PURAM,PERAMBUR R.S,VEENUS,AGARAM,PERIYAR NAGAR'},
];