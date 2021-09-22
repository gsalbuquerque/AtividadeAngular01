import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {
    nome: any;
    alterarNome(nome: { target: { value: any; }; }) {
    console.log(nome.target.value);
    this.nome = nome.target.value;
    }
    adicionar(nomeInput: any) {
        console.log(nomeInput);
        console.log("Adicionando...");
        }
    }