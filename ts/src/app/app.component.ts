import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // Logica do botao de mostrar mais
  show: boolean = true;
  showRestText: boolean = false;

  showMore(): void {
    this.show = !this.show;
    this.showRestText = !this.showRestText;
  }

 // Logica da discussao
  btnSubmitForm: boolean = false;
  btnCreateTopic: boolean = true;
  btnResetState:  boolean = false; 
  containerComments: boolean = false;
  isSubmitted = false;

  toggleState(): void {
    this.btnSubmitForm = !this.btnSubmitForm;
    this.isSubmitted = true;
}

  submitComments(): void {
  this.btnSubmitForm = false;
  this.btnResetState = true;
}

  toggleStateReset(): void {
    this.btnResetState = !this.btnResetState;
    this.btnSubmitForm = true;
  }

  toggleContainerComments(){
    this.containerComments = !this.containerComments;
  }
}
