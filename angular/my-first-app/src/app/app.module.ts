import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: ProfileComponent },
  { path: "products", component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
