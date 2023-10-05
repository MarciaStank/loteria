import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotteryComponent } from './lottery/lottery.component';
import { ResultComponent } from './result/result.component'; // Importe o novo componente

const routes: Routes = [
  { path: '', component: LotteryComponent },
  { path: 'result', component: ResultComponent } // Rota para a página de resultado
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
