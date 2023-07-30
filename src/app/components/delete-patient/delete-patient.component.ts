import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss'],
})
export class DeletePatientComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeletePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('Patient Data-----MAIN CONCERNED', this.data);
  }
  deletePatient(): void {
    const index = this.data.patientData.findIndex(
      (patient: any) => patient.id === this.data.patientId
    );
    if (index !== -1) {
      this.data.patientData.splice(index, 1);
    }
    this.dialogRef.close();
  }
}
