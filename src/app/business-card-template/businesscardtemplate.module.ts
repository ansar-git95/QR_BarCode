import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BusinessCardTemplateComponent } from './business-card-template.component';
import { CardComponent } from '../components/card/card.component';
import { TemplateOneComponent } from './template-one/template-one.component';
import { TemplateTwoComponent } from './template-two/template-two.component';
import { TemplateThreeComponent } from './template-three/template-three.component';
@NgModule({
  declarations: [
   BusinessCardTemplateComponent, CardComponent, TemplateOneComponent, TemplateTwoComponent, TemplateThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [BusinessCardTemplateComponent]
})
export class BusinessCardTemplateModule { }
