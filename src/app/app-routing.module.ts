import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './component/apropos/apropos.component';
import { LacarteComponent } from './component/lacarte/lacarte.component';
import { LesbieresComponent } from './component/lesbieres/lesbieres.component';
import { HomeComponent } from './component/home/home.component';
import { MentionsComponent } from './component/mentions/mentions.component';
import { BiereComponent } from './component/biere/biere.component';

const routes: Routes = [
  { path: 'apropos', component: AproposComponent },
  { path: 'carte', component: LacarteComponent },
  { path: 'lesbieres', component: LesbieresComponent, },
  { path: 'mentions', component: MentionsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'biere/:id', component: BiereComponent },
  { path: '**', component: HomeComponent }
];

const routerOptions = {
  anchorScrolling: "enabled" as "enabled"
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
