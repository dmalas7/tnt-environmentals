import { Component, OnInit, Input } from '@angular/core';
import { PestControlService } from 'src/app/interfaces/pest-control-service.interface';

@Component({
  selector: 'pest-control-card',
  templateUrl: './pest-control-card.component.html',
  styleUrls: ['./pest-control-card.component.css']
})
export class PestControlCardComponent implements OnInit {

  constructor() { }
  @Input() pestControlItem:PestControlService;
  ngOnInit() {
  }

}
