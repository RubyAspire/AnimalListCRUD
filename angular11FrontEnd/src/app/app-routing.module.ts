import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { EditComponent} from './animal/edit/edit.component';
import { AddComponent } from './animal/add/add.component'; 
const routes: Routes = [
  {path:"animal", component:AnimalComponent},
  {path:"animal/edit/:id", component:EditComponent},
  {path:"animal/add", component:AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
