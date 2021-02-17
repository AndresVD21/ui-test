import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  { path: '', component: CoreComponent, pathMatch: 'full' },
  { path: 'past-trials', loadChildren: () => import('./features/new-feature/new-feature.module').then(m => m.NewFeatureModule) },
  { path: 'how-works', loadChildren: () => import('./features/new-feature/new-feature.module').then(m => m.NewFeatureModule) },
  { path: 'login', loadChildren: () => import('./features/new-feature/new-feature.module').then(m => m.NewFeatureModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
