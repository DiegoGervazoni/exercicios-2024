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
  showForm: boolean = false;
  topicSent: boolean = false;
  topicTitle = '';
  topicContent = '';
  topicMessage = ''; 
  resetState:  boolean = false; 

  createTopic(): void {
    this.showForm = !this.showForm;
    this.topicSent = !this.topicSent;
  }

  sendTopic(): void {
    if (!this.topicTitle.trim() || !this.topicContent.trim()) {
      alert('Por favor, preencha tanto o título quanto o conteúdo do tópico.');
      return;
    }
    
    this.topicMessage = `Título do tópico: ${this.topicTitle}\nConteúdo do tópico: ${this.topicContent}`; 
    this.showForm = true;
    this.topicSent = true;
  }

  createNewTopic(): void {
    this.resetState = !this.resetState;
    this.showForm = !this.showForm;
  }
}
