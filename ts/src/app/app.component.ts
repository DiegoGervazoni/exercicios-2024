import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show: boolean = true;

  showMore(): void {
    this.show = !this.show;
  }

  showForm: boolean = false;
  topicSent: boolean = false;
  topicTitle = '';
  topicContent = '';
  topicMessage = ''; // Nova variável adicionada

  createTopic(): void {
    this.showForm = true;
    this.topicSent = false;
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
}
