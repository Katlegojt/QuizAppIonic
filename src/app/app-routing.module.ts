import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'quiz', loadChildren: './pages/quiz/quiz.module#QuizPageModule' },
  { path: 'category', loadChildren: './pages/category/category.module#CategoryPageModule' },
  { path: 'quiz1', loadChildren: './pages/quiz1/quiz1.module#Quiz1PageModule' },
  { path: 'quiz2', loadChildren: './pages/quiz2/quiz2.module#Quiz2PageModule' },
  { path: 'results', loadChildren: './pages/results/results.module#ResultsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
