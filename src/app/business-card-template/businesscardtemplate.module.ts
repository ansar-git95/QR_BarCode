import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BusinessCardTemplateComponent } from './business-card-template.component';
import { CardComponent } from '../components/card/card.component';
import { TemplateOneComponent } from './template-one/template-one.component';
import { TemplateTwoComponent } from './template-two/template-two.component';
import { TemplateThreeComponent } from './template-three/template-three.component';
import { MaterialSharedModule } from '../shared-modules/material-shared.module';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
   BusinessCardTemplateComponent, CardComponent, TemplateOneComponent, TemplateTwoComponent, TemplateThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialSharedModule,
    SidebarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [BusinessCardTemplateComponent]
})
export class BusinessCardTemplateModule { }
