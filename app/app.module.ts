import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CheckinFormComponent } from './form/checkin-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [BrowserModule,ReactiveFormsModule,FormsModule],
	declarations: [AppComponent,CheckinFormComponent],
	bootstrap: [AppComponent]
})

export class AppModule{

}