import React from 'react';
import { StackNavigator } from 'react-navigation';
import { NavBar } from '../components/header';
import { Intro, Loading } from '../screens/intro';

const IntroNav = StackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: () => null,
    },
  },
  Loading: {
    screen: Loading,
    navigationOptions: {
      header: () => null,
    },
  },
}, {
  initialRouteName: 'Loading',
  headerMode: 'screen',
});

// const navigateOnce = getStateForAction => (action, state) => {
//   const { type, routeName } = action;
//   return (
//     state &&
//       type === NavigationActions.NAVIGATE &&
//       routeName === state.routes[state.routes.length - 1].routeName
//   ) ? null : getStateForAction(action, state);
// };

// ProfileNav.router.getStateForAction = navigateOnce(ProfileNav.router.getStateForAction);

export default IntroNav;
