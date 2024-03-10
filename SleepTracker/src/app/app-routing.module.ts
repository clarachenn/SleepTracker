import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'logged-sleepiness-data',
    loadChildren: () => import('./logged-sleepiness-data/logged-sleepiness-data.module').then( m => m.LoggedSleepinessDataPageModule)
  },
  {
    path: 'logged-data',
    loadChildren: () => import('./logged-sleep-data/logged-sleep-data.module').then( m => m.LoggedSleepDataPageModule)
  },
  {
    path: 'logged-sleepiness-data',
    loadChildren: () => import('./logged-sleepiness-data/logged-sleepiness-data.module').then( m => m.LoggedSleepinessDataPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
