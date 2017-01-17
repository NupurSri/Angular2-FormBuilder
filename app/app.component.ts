import { Component } from '@angular/core';
import { CheckinFormComponent } from './form/checkin-form.component';

@Component({
	selector: 'my-app',
	template: `<div class="container-float">
				<div id="header" class="">
					<p class="title"> CHECK-IN </p>
				</div> 

				<div class="main-content row">
				<div class="form-div">
						<p class="heading">RETRIEVE YOUR BOOKING</p>
						<p class="info"> You can find your booking by filling out your family name and the booking code in your booking confirmation.</p>
						
					<checkin-form></checkin-form>
				</div>
				</div>
				<div id="footer"></div> 
				</div>
	`,
	styles: [`
		#header, #footer{
			background: url(./img/af_pattern_bg.png) repeat top center;
    		min-height: 75px;
   			width: 100%;
		}
		.main-content{
			min-height: 389px;
			width: 974px;
			width: 50%;
   			margin-left: 25%;
   			margin-top: 10%;
   			margin-bottom: 10%;
    		height: auto;
		}
		.title{
			text-align: center;
   			color: white;
   			font-size: 20px;
    		padding-top: 3%;
		}
		.form-div{
			border: 1px black solid;
		}
		.heading{
			text-align: center;
    		font-size: 30px;
    		font-weight: bold;
    		margin: 9%;
    		color: #003145;
		}
		.info{
			margin: 9%;
			font-size: 23px;
			color: #767676;
			
		}
		
	`]
})

export class AppComponent{}