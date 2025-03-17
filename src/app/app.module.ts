import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/Home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './pages/login/login.component';
import { StateComponent } from './pages/state/state.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CuestionarioComponent } from './pages/cuestionario/cuestionario.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'cuestionario', component: CuestionarioComponent
  },

  // {path:'clientes',component: ClientesComponent},
  // {path:'cliente/form',component: FormComponent},
  // {path:'cliente/form/:id',component: FormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    StateComponent,
    ContactComponent,
    CuestionarioComponent
  ],
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,

    MatInputModule,
    MatProgressSpinnerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
