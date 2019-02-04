import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { CartDetailComponent } from './store/cartDetail.component';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';

const routes: Routes = [
    { path: 'store', component: StoreComponent },
    { path: 'cart', component: CartDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: '**', redirectTo: '/store' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
