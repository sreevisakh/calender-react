import React from 'react';

class Nav extends React.Component{
	constructor(props) {
		super(props);
	}
	showDropDown(){
		this.props.showDropDown(true);
	}
	render(){
		return(
		<div className="row">
            <div className="col-md-12">
                <span className="month" onClick={this.showDropDown.bind(this)}>{this.props.data.month}</span>
                <span className="year">{this.props.data.year}</span>
            </div>
            
            {this.props.data.weekDays.map((week,index) => 
            	<div className="weeks" key={index}>
            	<span className="week">{week.substr(0,3)}</span>
            	</div>
            )}
        </div>
		)
	}
}
export default Nav

