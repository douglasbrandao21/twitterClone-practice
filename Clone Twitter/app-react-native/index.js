/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/


import {AppRegistry} from 'react-native';

//Redirect the App to ./src
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
