import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../../models/tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {

  @Input() tileInput:Tile | undefined;

  constructor() { }

  ngOnInit() {}

  itemClicked(){
    console.log("Has clicado la casilla número " + this.tileInput?.id)
  }

}
