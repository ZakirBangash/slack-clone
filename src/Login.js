import React,{useContext} from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import {auth, provider} from './firebase'
import GlobalContext from './GlobalState'

const Login = () => {

 const { addUser} = useContext(GlobalContext);


console.log(addUser)

const signIN = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).then(function(result) {
        console.log("Good")
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // The email of the user's account used.
        var email = error.email;
      
      });
}

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://a.slack-edge.com/bv1-8/slack_logo-ebd02d1.svg" alt="slack"/>
                <h1>Sign in to Slack</h1>    
                <p>Continue with the Google account or email address you use to sign in.</p>    
                <Button variant="contained" color="primary" onClick={signIN}>
                Continue with the Google account
               </Button>        
            </div>
        </div>
    )
}

export default Login
