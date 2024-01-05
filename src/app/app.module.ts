import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ConfrerieComponent } from './confrerie.component';
import { MainComponent } from './component/main/main.component';
import { CardComponent } from './component/card/card.component';
import { AproposComponent } from './component/apropos/apropos.component';
import { LesbieresComponent } from './component/lesbieres/lesbieres.component';
import { LacarteComponent } from './component/lacarte/lacarte.component';
import { HomeComponent } from './component/home/home.component';
import { MentionsComponent } from './component/mentions/mentions.component';
import { AlphabetFilterPipe } from './core/pipes/alphabet-filter.pipe';
import { BiereComponent } from './component/biere/biere.component';
import { BiereFormComponent } from './component/back-office/biere-form/biere-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './component/back-office/delete-biere/dashboard.component';


@NgModule({
  declarations: [
    ConfrerieComponent,
    MainComponent,
    CardComponent,
    AproposComponent,
    LesbieresComponent,
    LacarteComponent,
    HomeComponent,
    MentionsComponent,
    AlphabetFilterPipe,
    BiereComponent,
    BiereFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [importProvidersFrom(HttpClientModule)],
  bootstrap: [ConfrerieComponent]
})
export class AppModule { }
