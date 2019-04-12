import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [ModalComponent,
  ],
  imports: [
    NgbModule.forRoot()],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]

})
export class SharedModule { }
