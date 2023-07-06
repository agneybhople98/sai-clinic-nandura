import { Component, Input, OnInit } from '@angular/core';
import { DeletePatientComponent } from '../components/delete-patient/delete-patient.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  @Input() patientData: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(
      '🚀 ~ file: patient-list.component.ts:15 ~ PatientListComponent ~ ngOnInit ~ this.patientData:',
      this.patientData
    );
  }
  deletePatient(patientData: any) {
    console.log(
      '🚀 ~ file: patient-list.component.ts:22 ~ PatientListComponent ~ deletePatient ~ patientData:',
      patientData
    );
    this.dialog.open(DeletePatientComponent);
  }
}
