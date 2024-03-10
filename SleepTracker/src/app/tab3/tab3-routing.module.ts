import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';


const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },

  {
    path: 'logged-sleepiness-data',
    loadChildren: () => import('../logged-sleepiness-data/logged-sleepiness-data.module').then(m => m.LoggedSleepinessDataPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
