import React from 'react';

class DropDown extends React.Component{
	constructor(props) {
		super(props);
	}
    selectMonth(month){
        this.props.selectMonth(month);
    }
	render(){
		return(
		  <div id="dropdown" className={(!this.props.show)?'hidden':''}>
            <ul>
            {this.props.data.map((item,index)=> 
                <li key={index}><a href="#" onClick={this.selectMonth.bind(this,index)}>{item}</a></li>)}
            </ul>      
          </div>
		)
	}
}
export default DropDown;

