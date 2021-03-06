import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../containers/Login';
import Register from '../containers/Register';
import Profile from '../containers/Profile';
import TeamList from '../containers/TeamList';
import Slider from './Slider';
import Settings from '../containers/Settings';
import { SubMenu } from './Slider';


export const LoginNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Teams: { screen: TeamList },
  Slider: { screen: Slider },
  SubMenu: { screen: SubMenu },
});

export default class Navigation extends Component {
  render() {
    return <LoginNavigator />
  }
}
