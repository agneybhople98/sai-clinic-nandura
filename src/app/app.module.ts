import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { MaterialModule } from './material.module';
import { PatientViewComponent } from './components/patient-view/patient-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddPatientComponent,
    PatientListComponent,
    DeletePatientComponent,
    PatientViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
