import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

const routes: Routes = [ 
  { path : 'about' , component : AboutComponent},
  { path : 'contact' , component : ContactComponent},
  { path : 'authenticate' , component : AuthenticateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
