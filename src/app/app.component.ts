import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'atividade7';
  mensagem = '';
  numerosSorteados: number[] = [];

  
  sortearNumeros() {
    this.numerosSorteados = this.sortearNumerosUnicos();
    this.atualizarBotoesResultado(); 
    
  }
  atualizarBotoesResultado() {
    for (let i = 0; i < this.numerosSorteados.length; i++) {
      const resultadoId = `resultado${i + 1}`;
      const botaoResultado = document.getElementById(resultadoId) as HTMLButtonElement;
      botaoResultado.textContent = this.numerosSorteados[i].toString();
    }
  }

  private sortearNumerosUnicos(): number[] {
    const numerosSorteados: number[] = [];
    while (numerosSorteados.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numerosSorteados.includes(numero)) {
        numerosSorteados.push(numero);
      }
    }
    return numerosSorteados;
  }

  
}