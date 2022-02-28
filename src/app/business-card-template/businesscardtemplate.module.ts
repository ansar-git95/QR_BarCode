import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BusinessCardTemplateComponent } from './business-card-template.component';

@NgModule({
  declarations: [
   BusinessCardTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   ,
  ],
  providers: [],
  bootstrap: [BusinessCardTemplateComponent]
})
export class BusinessCardTemplateModule { }
