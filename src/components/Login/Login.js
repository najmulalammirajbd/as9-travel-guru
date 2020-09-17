import React, { useContext } from 'react';
import '../Login/Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import google from '../../Icon/google.png'
import firebaseConfig from './fairebase.config';
import Navbare from '../Navbare/Navbare';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
  const[logedInUser , setLogedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  
  const  handelgoogleSingin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const {displayName , email} = result.user;
      const sinedInUser = {name : displayName , email}
      setLogedInUser(sinedInUser);
      history.replace(from);

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
    return (
        <div>
            <Navbare></Navbare>
            <div className="Googlelogin">
                <h2>Log In Now</h2>
                <br/>
                <Button onClick={handelgoogleSingin} variant="outline-info"><img className="googlelogo" src={google} alt=""/>Google Sing In</Button>
            </div>
        </div>
    );
};

export default Login;