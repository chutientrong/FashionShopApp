import * as React from 'react';
// import { Appearance } from 'react-native-appearance';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS} from '../constants';
import Icon from "react-native-vector-icons/AntDesign";

// grabs stacks
import StackHome from './StackHome';
import StackExplore from './StackExplore';
import StackOffer from './StackOffer';
import StackCart from './StackCart';
import { View } from 'react-native';
import StackAccount from './StackAccount';

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
      // tabBarShowLabel: false,
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
        name="HomeStack"
        component={StackHome}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home' color={focused?COLORS.red2 : COLORS.gray2} size={24}></Icon>
          ),
          tabBarLabel:'Home'
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={StackExplore}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='search1' color={focused?COLORS.red2 : COLORS.gray2} size={24}></Icon>
          ),
          tabBarLabel:'Explore'
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={StackCart}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='shoppingcart' color={focused?COLORS.red2 : COLORS.gray2} size={24}></Icon>
          ),
          tabBarLabel:'Cart'
        }}
      />
      <Tab.Screen
        name="OfferStack"
        component={StackOffer}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='tago' color={focused?COLORS.red2 : COLORS.gray2} size={24}></Icon>
            
          ),
          tabBarLabel:'Offer'
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={StackAccount}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='user' color={focused?COLORS.red2 : COLORS.gray2} size={24}></Icon>

          ),
          tabBarLabel:'Account'

        }}
      />
    </Tab.Navigator>
  );
};
