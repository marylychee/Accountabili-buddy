import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';


import Login from '../containers/Login';
import Register from '../containers/Register';
import Profile from '../containers/Profile';
import Camera from '../containers/Camera';
import Ducky from '../containers/DuckyRace/PlayerList';
import TeamList from '../containers/TeamList';
import Slider from './Slider';

export const DashboardNavigator = TabNavigator({
  Profile: { screen: Profile },
  Camera: { screen: Camera },
  Ducky: { screen: Ducky }
});

export const LoginNavigator = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Teams: { screen: TeamList },
  Slider: { screen: Slider },
  Profile: { screen: Profile }
});

export default class Navigation extends Component {
  render() {
    return <LoginNavigator />
  }
}