import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCardTemplateComponent } from './business-card-template/business-card-template.component';

const routes: Routes = [
  {path:'', redirectTo:'business-card', pathMatch: 'full'},
  {
      path:'business-card',
      component: BusinessCardTemplateComponent
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }