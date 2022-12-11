import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Farmeable } from '../../models/farmeable.model';
import { FarmeablesService } from '../../services/farmeables.service';
@Component({
  selector: 'app-farmeable-editable',
  templateUrl: './farmeable-editable.component.html',
  styleUrls: ['./farmeable-editable.component.scss'],
})
export class FarmeableEditableComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() farmeable:Farmeable | undefined;

  constructor(
    farmeableSVC:FarmeablesService
  ) { }

  ngOnInit() {}

  onEditClick(){
    this.onEdit.emit(this.farmeable);
  }

  onDeleteClick(){
    this.onDelete.emit(this.farmeable);
  }


}
