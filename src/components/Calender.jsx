import React from 'react';
import CalenderModel from '../models/calender.model.ts'
import Nav from './Nav.jsx'
import DropDown from './DropDown.jsx';

class Calender extends React.Component{
	constructor(props) {
		super(props);
		this.calender = new CalenderModel();
		this.state = {
			calender : this.calender,
			showMonths : false
		}
	}
	getNavData(){
		return 	{
			month : this.state.calender.getMonth(),
			year : this.state.calender.year,
			weekDays : this.state.calender.weekDays
		}
	}
	showDropDown(status){
		this.setState({showMonths : status});

	}
	selectMonth(month){
		this.calender.setMonth(month);
		this.setState({calender : this.calender,showMonths : false});
	}
	render(){
		return(
			<div>
			<div className="container">
				<Nav data={this.getNavData()} showDropDown={this.showDropDown.bind(this)}></Nav>
				{this.state.calender.dates.map((week,index) => 
					<div className="row" key={index}>
		            	{week.map((day,index) => 
		            		<div className="day" key={index}>
		                		<span className={'date '+day.type}>{day.date}</span>
		            		</div>
		            	)}
		        	</div>
		        )}
		        
			</div>
			<DropDown show={this.state.showMonths} data={this.state.calender.Months} selectMonth={this.selectMonth.bind(this)}></DropDown>
			</div>
		)
	}
}
export default Calender;

