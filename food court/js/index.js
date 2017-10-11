

//complete the code to create an angular module and a controller 

var list1;   //global variable
// angular.module().controller();
var myApp = angular.module('myApp',[]);
myApp.controller('formController',function($scope,$http){
	$http.get("data/menu.json").then(function(response){	//ajax call
		console.log("Success"+response);
		list1=response.data;
	})
	.then(function(response){
		if(response){
			alert("Status :"+response.statusText);
		}
	});

	$(".button").click(function(){
		$('#content').css('display','block');
	});

	$(".button8").click(function(){
		display(list1.breakfast);
	});

	$(".button7").click(function(){
		display(list1.lunch);
	});

	$(".button6").click(function(){
		display(list1.snacks);
	});
	$(".button5").click(function(){
		display(list1.special);
	});
	$(".button4").click(function(){
		display(list1.juice);
	});
	$(".button3").click(function(){
		console.log("Paratha Garam");
	});
	$(".button2").click(function(){
		display(list1.dosacorner);
	});
	$(".button1").click(function(){
		display(list1.chai);
	});

	var display = function(items){
		result = '';
		for(item in items){
			val=Number(item)+1;
			result += "<p>"+val+". "+items[item]+"</p>";
		}
		$('#content').html(result);
	};
});
//use an angular service to retrieve data from "data/menu.json" into the global variable list1

$(function(){
	//create constructor function for User
	// populate username and password and get and set methods
	var User=function(){
		this.username = null;
		this.password = null;
		this.set_username = function(usr){
			this.username = usr;
		}
		this.set_password = function(pwd){
			this.password = pwd;
		}
		this.get_username = function(){
			return this.username;
		}
		this.get_password = function(){
			return this.password;
		}
	};
	var usr = new User();

	$(".login").click(function(){
		usr.set_username( $('#usr').val() );
		usr.set_password( $('#pwd').val() );
		validate();
	});

	var validate = function(){
		if(usr.get_username()){
			if(usr.get_username() == usr.get_password()){
				alert("Success");
				$('form').hide();
				$('#form-title').hide();
				$('button').removeAttr('disabled');
				$('#username').html("Welcome "+usr.get_username()+", "+Date().slice(4,15));
			}
			else{
				alert("Error");
			}
		}
		else{
			alert("Enter Username");
		}
	}


	//add validate method to User using prototype property
	
	
	
	//associate login-button to click event
	//fetch the input field details and invoke validate method
	//if log-in validation passes - enable the buttons, 
	//on button-clicks, display the div with corresponding menu details
	

	
	 
});








