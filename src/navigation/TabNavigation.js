import * as React from 'react';
// import { Appearance } from 'react-native-appearance';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS} from '../constants';
import Icon from "react-native-vector-icons/MaterialIcons";
// grabs stacks
import StackHome from './StackHome';
import StackMulti from './StackMulti';
import StackSettings from './StackSettings';
import StackStats from './StackStats';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 20,
          backgroundColor: COLORS.gray3,
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};

export default () => {

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#FFF',
        borderTopColor: 'transparent',
        height: Platform.OS == 'android' ? 55 : 80,
      },
    }}
    tabBar={props => <CustomTabBar props={props} />}

    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home' color={focused?COLORS.red2 : COLORS.gray2} size={30}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="StackMulti"
        component={StackMulti}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home' color={focused?COLORS.red2 : COLORS.gray2} size={30}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="StackStats"
        component={StackStats}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home' color={focused?COLORS.red2 : COLORS.gray2} size={30}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="StackSettings"
        component={StackSettings}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home' color={focused?COLORS.red2 : COLORS.gray2} size={30}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
