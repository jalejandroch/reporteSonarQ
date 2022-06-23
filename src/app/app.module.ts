import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateFilesComponent } from './generate-files/generate-files.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SonarQubeReportComponent } from './sonar-qube-report/sonar-qube-report.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateFilesComponent,
    SonarQubeReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
