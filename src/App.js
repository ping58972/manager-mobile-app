import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // My web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyAT3c-yjHatGesJ7sMgjrDITTQJ1rC9tgU',
      authDomain: 'authentication-70356.firebaseapp.com',
      databaseURL: 'https://authentication-70356.firebaseio.com',
      projectId: 'authentication-70356',
      storageBucket: 'authentication-70356.appspot.com',
      messagingSenderId: '597172448841',
      appId: '1:597172448841:web:312cda4ceb3f758e'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
