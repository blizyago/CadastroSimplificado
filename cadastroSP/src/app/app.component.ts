import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = '';
  pessoas=[];

  cadastro(){
    this.pessoas.push(this.titulo)
    this.titulo=null
  }
}


