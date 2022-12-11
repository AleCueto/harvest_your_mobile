import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Farmeable } from '../../models/farmeable.model';
import { FarmeablesService } from '../../services/farmeables.service';

@Component({
  selector: 'app-farmeable-creator',
  templateUrl: './farmeable-creator.component.html',
  styleUrls: ['./farmeable-creator.component.scss'],
})
export class FarmeableCreatorComponent implements OnInit {


  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() farmeable:Farmeable | undefined;

  constructor(
    farmeableSVC:FarmeablesService
  ) { }

  ngOnInit() {}


  onEditClick(){
    //this.onEdit.emit(this.farmeable);
  }

  onDeleteClick(){
    //this.onDelete.emit(this.farmeable);
  }


}
