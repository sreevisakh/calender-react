import React from 'react';
import ReactDom from 'react-dom';
import Calender from './components/Calender.jsx';
import CalenderModel from './models/calender.model.ts';


class App extends React.Component{
	constructor(props) {
		super(props);
	}
    render(){
        return (
        	<div>
	            <Calender></Calender>
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById('app'));