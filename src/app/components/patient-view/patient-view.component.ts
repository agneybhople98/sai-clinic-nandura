import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss'],
})
export class PatientViewComponent implements OnInit {
  public patient: any;
  constructor(
    public dialogRef: MatDialogRef<PatientViewComponent>,
    @Inject(MAT_DIALOG_DATA) public d̵ata: any
  ) {}

  ngOnInit(): void {
    this.patient = this.d̵ata;
    console.log('Data', this.d̵ata);
  }
}
