import { ClassComponent } from './Components/class/class.component';
import { ElevesComponent } from './Components/eleves/eleves.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : '' ,
  component: LayoutComponent ,
  children: [
     {path :'' ,
     component: ElevesComponent
     },
      {path :'class' ,
     component: ClassComponent
     },

  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
