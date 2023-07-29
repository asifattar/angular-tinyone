import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { heroImgSec } from './shared/components/heroImgsec/heroImgSec.component.';
import { inspirationSec } from './shared/components/inspirationSec/inspirationSec.component';
import { features } from './shared/components/features/features.component';
import { featureSecHeading } from './shared/components/featureSecHeading/featureSecHeading.component';
import { featureThumbnailSec } from './shared/components/featureThumbnailSec/featureThumbnailSec.componenet';
import { contactUs } from './shared/components/contactUs/contactUs.component';
import { footersec } from './shared/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    heroImgSec,
    inspirationSec,
    features,
    featureSecHeading,
    featureThumbnailSec,
    contactUs,
    footersec
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
