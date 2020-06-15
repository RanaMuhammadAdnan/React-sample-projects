import React, { Component } from 'react';
var firebase = require('firebase');

 var config = {
    apiKey: "AIzaSyBVLC8koE2OqGRvDkvnaYTPyTSRMwznpZk",
    authDomain: "login-9883c.firebaseapp.com",
    databaseURL: "https://login-9883c.firebaseio.com",
    projectId: "login-9883c",
    storageBucket: "login-9883c.appspot.com",
    messagingSenderId: "187752294083"
  };
  firebase.initializeApp(config);

class Authen extends Component {
  constructor(props){
    super(props)

    this.state= {
     err:''
    };

    this.Login = this.Login.bind(this);
    this.SignUp =this.SignUp.bind(this);
    this.logOut =this.logOut.bind(this);
    this.google =this.google.bind(this);

  }

  Login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password);

    promise
    .then(data =>{
      var lout = document.getElementById('logout');
      var err ="Thanks " + data.user.email +" for Using Our App";
      lout.classList.remove('hide');
      this.setState({err:err});
    });


    promise.catch(e =>{
      var err = e.message;
      this.setState({err:err});
    });

  }

  SignUp(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
    .then(data => {
      var err ="Welcome " + data.user.email;
      firebase.database().ref('users/'+data.user.uid).push({
        email: data.user.email
      });
      this.setState({err:err});
    });

    promise
    .catch(e =>{
      var err = e.message;
      console.log(this.err);
      this.setState({err:err});
    });
  }

  logOut(){
    firebase.auth().signOut();

    var lout = document.getElementById('logout');

    lout.classList.add('hide');
  }

  google(){
    console.log("i m google");

    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise
    .then(result =>{
      var user = result.user;
      console.log(user);

      firebase.database().ref('users/'+user.uid).set({
        email:user.email,
        name:user.displayName
      })
    });

    promise
    .catch(e =>{
      var err = e.message;
      console.log(this.err);
      this.setState({err:err});
    });
  }

  render() {
    return (
      <div>
        <input type="email" ref="email" id="email" placeholder="Enter Your Name" /><br/>
        <input type="password" ref="password" id="password" placeholder="Enter Your Password" /><br />
        <p>{this.state.err}</p>

        <button onClick={this.Login}>Log In</button>
        <button onClick={this.SignUp}>Sign Up</button>
        <button onClick={this.logOut} id="logout" className="hide">Log Out</button><br />
        <button onClick={this.google} id="google" className="google">Sign In with Google</button><br />

      </div>
    );
  }
}

export default Authen;
