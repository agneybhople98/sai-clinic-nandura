import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientService } from 'src/app/patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss'],
})
export class DeletePatientComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeletePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    console.log('Patient Data-----MAIN CONCERNED', this.data);
  }
  deletePatient(): void {
    const index = this.data.patientData.findIndex(
      (patient: any) => patient.id === this.data.patientId
    );
    console.log(
      '🚀 ~ file: delete-patient.component.ts:24 ~ DeletePatientComponent ~ deletePatient ~ index:',
      index
    );

    if (index !== -1) {
      // this.data.patientData.splice(index, 1);
      this.patientService.deletePatient(index).subscribe(
        (res) => {
          console.log(
            '🚀 ~ file: delete-patient.component.ts:28 ~ DeletePatientComponent ~ deletePatient ~ res:',
            res
          );
        },
        (error) => {
          // Handle any errors that occurred during the deletion process
          console.error('Error deleting patient:', error);
        }
      );

      this.dialogRef.close();
    }
  }
}
