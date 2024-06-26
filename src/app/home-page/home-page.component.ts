import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from '../components/add-patient/add-patient.component';
import { FormControl } from '@angular/forms';
import { HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public dialog: MatDialog, private overlay: OverlayContainer) {}
  toggleControl = new FormControl();
  public containerClass: any;
  @HostBinding('class') className = '';

  public patientList = [];

  ngOnInit(): void {
    this.initializeDarkMode();
    this.toggleControl.valueChanges.subscribe((darkMode: any) => {
      this.applyDarkMode(darkMode);
    });
  }

  private initializeDarkMode(): void {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
      this.applyDarkMode(true);
      this.toggleControl.setValue(true);
    }
  }

  private applyDarkMode(darkMode: boolean): void {
    const darkClassName = 'darkMode';

    this.className = darkMode ? darkClassName : '';
    if (darkMode) {
      this.containerClass = true;
      this.overlay.getContainerElement().classList.add(darkClassName);
    } else {
      this.containerClass = false;
      this.overlay.getContainerElement().classList.remove(darkClassName);
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }
  addPatient() {
    this.dialog.open(AddPatientComponent, {
      disableClose: true,
      panelClass: 'add-patient-dialog',
    });
  }
}
