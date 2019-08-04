import { light as lightTheme, mapping } from '@eva-design/eva';
import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import { ApplicationProvider, List } from 'react-native-ui-kitten';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import ItemScreen from './screens/ItemScreen';

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Item: {
      screen: ItemScreen,
    },
  },
  {
    initialRouteName: 'List'
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <AppContainer />
      </ApplicationProvider>
    </Fragment>
  );
};

export default App;
