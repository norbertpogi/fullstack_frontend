import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rsm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() modalID: string;
  @Input() modalTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
