import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PagemainComponent } from './pagemain/pagemain.component';

const routes: Routes = [

{
    path: 'page-1',component:Page1Component
},
{
    path: 'page-2',component:Page2Component
},
{
    path: 'page-main',component:PagemainComponent
},
{
    path: '', redirectTo: 'page-main', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
