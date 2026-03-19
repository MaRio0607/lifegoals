import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({ "projectId": "lifegoals-807b6", "appId": "1:629776139532:web:7e7e1fb6dacdadac3c7529", "storageBucket": "lifegoals-807b6.firebasestorage.app", "apiKey": "AIzaSyBe05QBnOwkDKbYp5x3lIGJlTBOnuMpw3w", "authDomain": "lifegoals-807b6.firebaseapp.com", "messagingSenderId": "629776139532", })),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
