import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
})
export class AddPatientComponent implements OnInit {
  public prescriptionListForm: any;

  separatorKeysCodes: number[] = [ENTER, COMMA, TAB];

  public addPatient: any;

  // Allergie Instances
  allAllergies: string[] = ['Allergie1', 'Allergie2', 'Allergie3', 'None'];
  // allergieControl: FormArray;
  // allergieCtrl = new FormControl('');
  // filteredAllergies: Observable<string[]>;
  // Complain Instances
  allComplains: string[] = ['Complain 1', 'Complain 2', 'Complain 3'];
  complainControl: FormArray;
  complainCtrl = new FormControl('');
  filteredComplains: Observable<string[]>;

  allergies: string[] = [];
  complains: string[] = [];

  @ViewChild('allergieInput', { static: false })
  allergieInput!: ElementRef<HTMLInputElement>;

  @ViewChild('complainInput', { static: false })
  complainInput!: ElementRef<HTMLInputElement>;
  totalCount = 1;

  constructor(private fb: FormBuilder) {
    // this.allergieControl = this.fb.array([]);
    this.complainControl = this.fb.array([]);

    // this.filteredAllergies = this.allergieCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((allergie: string | null) =>
    //     allergie ? this._filter(allergie) : this.allAllergies.slice()
    //   )
    // );

    this.filteredComplains = this.complainCtrl.valueChanges.pipe(
      startWith(null),
      map((complain: string | null) =>
        complain ? this._filterComplain(complain) : this.allComplains.slice()
      )
    );
  }
  ngOnInit(): void {
    this.addPatient = this.fb.group({
      name: new FormControl(),
      surname: new FormControl(),
      address: new FormControl(),
      patientComponent: new FormControl(),
      datePicker: new FormControl(),
      gender: new FormControl(),
      age: new FormControl(),
      pulse: new FormControl(),
      weight: new FormControl(),
      // patientAllergies: new FormGroup({
      //   allergies: this.allergieControl, // Assign the FormArray to the allergies field
      // }),
      patientComplains: new FormGroup({
        complains: this.complainControl,
      }),
    });
    // Prescription List Form Group
    this.prescriptionListForm = this.fb.group({
      prescriptions: this.fb.array([this.createPrescriptionBlock()]),
    });
  }
  // Prescription Methods

  public addPrescriptionFormGroup() {
    const prescriptions = this.prescriptionListForm.get(
      'prescriptions'
    ) as FormArray;
    prescriptions.push(this.createPrescriptionBlock());
  }

  private createPrescriptionBlock(): FormGroup {
    return new FormGroup({
      medicine: new FormControl(),
      days: new FormControl(),
      timings: new FormControl(),
      dosage: new FormControl(),
    });
  }

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our allergie
  //   if ((value || '').trim()) {
  //     // this.allergieControl.push(this.fb.control(value));
  //   }
  //   // Clear our allergie
  //   if (event.chipInput) {
  //     event.chipInput!.clear();
  //   }
  //   this.allergieCtrl.setValue(null);
  // }

  addComplain(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our allergie
    if ((value || '').trim()) {
      this.complainControl.push(this.fb.control(value));
    }
    // Clear our allergie
    if (event.chipInput) {
      event.chipInput!.clear();
    }
    this.complainCtrl.setValue(null);
  }

  // remove(allergie: number): void {
  //   this.allergieControl.removeAt(allergie);
  // }
  removeComplain(complain: number): void {
    this.complainControl.removeAt(complain);
  }
  // selected(event: MatAutocompleteSelectedEvent): void {
  //   const selectedValue = event.option.viewValue;
  //   this.allergieControl.push(new FormControl(selectedValue));
  //   this.allergieInput.nativeElement.value = '';
  //   this.allergieCtrl.setValue(null);
  // }

  selectedComplain(event: MatAutocompleteSelectedEvent): void {
    const selectedValue = event.option.viewValue;
    this.complainControl.push(new FormControl(selectedValue));
    this.complainInput.nativeElement.value = '';
    this.complainCtrl.setValue(null);
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allAllergies.filter((allergie) =>
  //     allergie.toLowerCase().includes(filterValue)
  //   );
  // }
  private _filterComplain(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allComplains.filter((complain) =>
      complain.toLowerCase().includes(filterValue)
    );
  }

  savePatient(): void {
    console.log(
      '🚀 ~ file: add-patient.component.ts:151 ~ AddPatientComponent ~ savePatient ~ this.addPatient.value:',
      this.addPatient.value
    );

    console.log(
      '🚀 ~ file: add-patient.component.ts:171 ~ AddPatientComponent ~ savePatient ~ this.prescriptionList.value:',
      this.prescriptionListForm.value
    );

    console.log(this.prescriptionListForm.get('prescriptions').controls.length);
  }
}
