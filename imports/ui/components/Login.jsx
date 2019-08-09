import React, {Component} from 'react'; 
import ValidatedLoginForm 	from './ValidatedLoginForm.js'



export default class Login extends Component{

	render() {
		return(
			<div className="loginbox">
				<ValidatedLoginForm/> 
			</div>
		)
}
}