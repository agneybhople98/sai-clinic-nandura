import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPatientComponent } from '../components/add-patient/add-patient.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  public patientList = [
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
    {
      name: 'Agney 1',
      description: 'Nothing 1',
    },
  ];

  ngOnInit(): void {}
  addPatient() {
    this.dialog.open(AddPatientComponent, {
      panelClass: 'add-patient-dialog',
    });
  }
}
