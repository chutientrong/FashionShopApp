import * as React from 'react';
// import { Appearance } from 'react-native-appearance';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS} from '../constants';
// import StackHome from './StackHome';
// import StackMulti from './StackMulti';
// import StackStats from './StackStats';
// import StackSettings from './StackSettings';
import Icon from "react-native-vector-icons/MaterialIcons";

// grabs stacks
import StackHome from './StackHome';
import StackMulti from './StackMulti';
import StackSettings from './StackSettings';
import StackStats from './StackStats';
import { View } from 'react-native';

// icons
// import SvgCog from '../icons/Svg.Cog';
// import SvgHome from '../icons/Svg.Home';
// import SvgPages from '../icons/Svg.Pages';
// import SvgStats from '../icons/Svg.Stats';

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
  // get system preference
  // const colorScheme = Appearance.getColorScheme();
  // console.log('react-native-appearance::Appearance', colorScheme);

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
      // screenOptions={{
      //   headerShown: false,
      //   tabBarActiveBackgroundColor: 'purple',
      //   tabBarActiveTintColor: COLORS.white,
      //   tabBarInactiveTintColor: COLORS.inactiveGrey,
      //   tabBarStyle: {
      //     backgroundColor: 'brown',
      //     borderTopColor: 'yellow'
      //   },
      //   tabBarItemStyle: {
      //     // backgroundColor: 'blue'
      //   }
      // }}
    >
      <Tab.Screen
        name="StackHome"
        component={StackHome}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name='home' color={focused?COLORS.red2 : COLORS.gray2} size={30}></Icon>
            // <Image
            //   source={Icon.home}
            //   resizeMode="contain"
            //   style={{
            //     height: 20,
            //     width: 20,
            //     tintColor: focused ? COLORS.red2 : COLORS.gray2,
            //   }}
            // />
          ),
        }}
      />
      <Tab.Screen
        name="StackMulti"
        component={StackMulti}
        options={{
          // tabBarIcon: ({ focused }) => <SvgPages active={focused} />,
          tabBarLabel: 'Multi'
        }}
      />
      <Tab.Screen
        name="StackStats"
        component={StackStats}
        options={{
          // tabBarIcon: ({ focused }) => <SvgStats active={focused} />,
          tabBarLabel: 'Stats'
        }}
      />
      <Tab.Screen
        name="StackSettings"
        component={StackSettings}
        options={{
          // tabBarIcon: ({ focused }) => <SvgCog active={focused} />,
          tabBarLabel: 'Settings'
        }}
      />
    </Tab.Navigator>
  );
};
