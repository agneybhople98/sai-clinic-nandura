import { Component, Input, OnInit } from '@angular/core';
import { DeletePatientComponent } from '../components/delete-patient/delete-patient.component';
import { PatientViewComponent } from '../components/patient-view/patient-view.component';
import { MatDialog } from '@angular/material/dialog';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss'],
})
export class PatientListComponent implements OnInit {
  @Input() patientData: any;

  constructor(
    public dialog: MatDialog,
    private _patientService: PatientService
  ) {}

  ngOnInit(): void {
    this._patientService.getAllPatients().subscribe((res) => {
      this.patientData = res;

      console.log(
        '🚀 ~ file: patient-list.component.ts:26 ~ PatientListComponent ~ this._patientService.getAllPatients ~ res:',
        res
      );
    });
  }
  viewPatient(patient: any): void {
    this.dialog.open(PatientViewComponent, {
      data: patient,
    });
  }
  deletePatient(patient: any) {
    console.log(
      '🚀 ~ file: patient-list.component.ts:22 ~ PatientListComponent ~ deletePatient ~ patientData:',
      patient.id
    );
    const dataObject = {
      patientData: this.patientData,
      patientId: patient.id,
    };
    this.dialog.open(DeletePatientComponent, {
      disableClose: true,
      data: dataObject,
    });
  }
}
