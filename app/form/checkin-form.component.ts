import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: '<checkin-form></checkin-form>',
	template: `<form [formGroup]="checkInForm" (ngSubmit)="onSubmit()" >
							<div class="form-group">
		   						<label for="bookingCode" class="form-label">Booking Code</label>
		   						<input  type="text" class="form-control" id="bookingCode" placeholder="Booking Code" formControlName="bookingCode">
		   						<div *ngIf="checkInForm.controls['bookingCode'].hasError('required')" class="alert alert-danger">
		   							Please enter Booking Code
		   						</div>
		   						<div *ngIf="checkInForm.controls['bookingCode'].hasError('minlength')" class="alert alert-danger">
		   							Please enter minimum 5 characters
		   						</div>
		   						<div *ngIf="checkInForm.controls['bookingCode'].hasError('maxlength')" class="alert alert-danger">
		   							Please enter maximum 5 characters
		   						</div>
		   						<div *ngIf="checkInForm.controls['bookingCode'].hasError('pattern')" class="alert alert-danger">
		   							Please enter proper Booking Code
		   						</div>
		   					</div>
		  					<div class="form-group">
		   						<label for="familyName" class="form-label">Family Name</label>
		   						<input type="text" class="form-control" id="familyName" placeholder="Family Name" formControlName="familyName">
		   						<div *ngIf="checkInForm.controls['familyName'].hasError('required')" class="alert alert-danger">
		   							Please enter Family Name
		   						</div>
		   						<div *ngIf="checkInForm.controls['familyName'].hasError('minlength')" class="alert alert-danger">
		   							Please enter minimum 2 characters
		   						</div>
		   						<div *ngIf="checkInForm.controls['familyName'].hasError('maxlength')" class="alert alert-danger">
		   							Please enter maximum 30 characters
		   						</div>
		   						<div *ngIf="checkInForm.controls['familyName'].hasError('pattern')" class="alert alert-danger">
		   							Please enter proper family name
		   						</div>
		  					</div>
		  					<div class="form-group">
		  						<button class="retrieve-btn" type="submit" [disabled]="!checkInForm.valid" ><span class="button-text">Retieve Booking</span></button>
		  					</div>
				</form>
					`,
	styles: [`
		
		.checkin-form{
			margin: 9%;
		}
		
		.retrieve-btn{
			background-color: #d40504;
			width: 100%;
    		height: 6%;
		}
		.form-label{
			color: #767676;
		}
		
		.button-text{
			color: white;
			font-size: 15px;
		}
		input.ng-valid{
			border-left: 5px solid green;
		}
		input.ng-invalid{
			border-left: 5px solid red;
		}
		`]
})

export class CheckinFormComponent implements OnInit{
	checkInForm: FormGroup;

	constructor(private _fBuilder:FormBuilder){}

	ngOnInit(){
		this.checkInForm = this._fBuilder.group({
			bookingCode: ['5BVCD', [Validators.required, Validators.minLength(5), Validators.maxLength(6), Validators.pattern('^[a-zA-Z2-9]+$')]],
			familyName: ['Enter Family Name', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[A-Za-z ]+$')]]
		});
	}

	onSubmit(): void {  
    	console.log('you submitted value:', this.checkInForm.value);  
  	}
}