import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{
  path:"about",
  component: AboutComponent
},
{
  path:"skills",
  component: SkillsComponent
},
{
  path:"portfolio",
  component: PortfolioComponent
},
{
  path:"experience",
  component: ExperienceComponent
},
{
  path:"contact",
  component: ContactComponent
},
{ path: '', 
  redirectTo: '/home', 
  pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
