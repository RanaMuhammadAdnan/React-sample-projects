import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');

var config = {
apiKey: "AIzaSyDzpsjJEncQbjkMa3QW7f8ge9U9NdAyWcQ",
authDomain: "uservey-30497.firebaseapp.com",
databaseURL: "https://uservey-30497.firebaseio.com",
projectId: "uservey-30497",
storageBucket: "uservey-30497.appspot.com",
messagingSenderId: "314909397355"
};
firebase.initializeApp(config);


class Usurvey extends Component {
  constructor(props){
  	super(props);

  	this.state ={
  		uid: uuid.v1(),
  		studentName:'',
  		answers: {
  			answer1:'',
  			answer2:'',
  			answer3:''
  		},
  		isSubmitted:false
  	};

  	this.nameSubmit = this.nameSubmit.bind(this);
  	this.answerselected = this.answerselected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }

  nameSubmit(event){
  	var studentName = this.refs.name.value;
  	this.setState({studentName:studentName}, function(){
  		console.log(this.state);
  	});
  }

  answerselected(event){
  	var answers = this.state.answers;
    if(event.target.name ==='answer1'){
      answers.answer1 = event.target.value;
    }
    else if(event.target.name ==='answer2'){
      answers.answer2 = event.target.value;
    }
    else if(event.target.name ==='answer3'){
      answers.answer3 = event.target.value;
    }

    this.setState({answers:answers}, function(){
      console.log(this.state);
    });
  }

  questionSubmit(){
    firebase.database().ref('uSurvey'+this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers

    });
    this.setState({isSubmitted:true});
  }

  render() {
  	var studentName;
  	var questions;

  	if(this.state.studentName==='' && this.state.isSubmitted ===false){
  		studentName = <div>
  			<h1>Hey Student, Please let us your name :</h1>
  			<form onSubmit={this.nameSubmit}>
  				<input className="namy" type="text" placeholder="Enter your Name" ref="name" />
  			</form>
  		</div>;
  		questions = ''
  	} 
  	else if (this.state.studentName !== '' && this.state.isSubmitted === false){
  		studentName = <h1>Welcome to your survey {this.state.studentName}</h1>;
  		questions = <div>
  			<h2>Here are some questions:</h2>
  			<form onSubmit={this.questionSubmit}>
  				<div className="card">
  					<label>What kind of courses you most: </label><br />
  					<input type="radio" name="answer1" value="Technology" onChange={this.answerselected}/>Technology
  					<input type="radio" name="answer1" value="Design" onChange={this.answerselected}/>Design
  					<input type="radio" name="answer1" value="Marketing" onChange={this.answerselected}/>Marketing

  				</div>

          <div className="card">
            <label>You are a: </label><br />
            <input type="radio" name="answer2" value="Student" onChange={this.answerselected}/>Student
            <input type="radio" name="answer2" value="In-job" onChange={this.answerselected}/>In-job
            <input type="radio" name="answer2" value="looking job" onChange={this.answerselected}/>looking job
          </div>

          <div className="card">
            <label>Is online learning helpful: </label><br />
            <input type="radio" name="answer3" value="yes" onChange={this.answerselected}/>Yes
            <input type="radio" name="answer3" value="no" onChange={this.answerselected}/>No
            <input type="radio" name="answer3" value="may be" onChange={this.answerselected}/>May be
          </div>
          <input className="feedback-button" type="submit" value="submit" />
  			</form>
  		</div>;
  	}
    else if(this.state.studentName!=="" &&  this.state.isSubmitted===true){
      studentName = <h1>Thanks. {this.state.studentName}</h1>
    }

    return (
      <div>
        {studentName}
        ____________________________

        {questions}
      </div>
    );
  }
}

export default Usurvey;
