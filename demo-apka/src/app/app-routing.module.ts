import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },

  {
    path: 'posts',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
