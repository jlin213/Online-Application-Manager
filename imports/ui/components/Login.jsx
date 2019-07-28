import React, {Component} from 'react'; 


export default class Login extends Component{
	onSubmit(e){
		e.preventDefault(); 

		var self = this; 
		var email = $(e.target).find("[name=email]").val();
		var password = $(e.target).find("[name=password]").val();
		Meteor.loginWithPassword(email, password, function(err){
			if(err){
				console.log(err.reason());
			}else{
				FlowRouter.go("Home");
			}
		})
	}

	render() {
		return(
			<div className="container">
				<div className = "row">
					<form>
						<input type= "text" name = "email" placeholder="Enter email..." className = "form-control"/>
						<input type= "text" name = "password" placeholder="Enter password..." className = "form-control"/> 
						<input type= "submit" value = "Login" className ="btn btn-default"/> 
					</form> 
				</div>
			</div>



		)
}
}