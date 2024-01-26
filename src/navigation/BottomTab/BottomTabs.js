import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/secondScreen/Home';
import Request from '../../screens/thirdScreen/component/Request';
import Profile from '../../screens/fourthScreen/component/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 20 : 25;
            // color = focused ? 'red' : 'yellow';

            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === 'Request') {
            iconName = 'person';
            size = focused ? 20 : 25;
            // color = focused ? 'red' : 'yellow';

            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = 'person';
            size = focused ? 20 : 25;
            // color = focused ? 'red' : 'yellow';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        // tabBarShowLabel: false,
        // tabBarActiveBackgroundColor: 'red',
        // tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {height: 70},
        tabBarItemStyle: {marginBottom: 10},
        tabBarIconStyle: {marginTop: 15},
        tabBarBadgeStyle: {backgroundColor: 'red'},
      })}>
      <Tab.Screen name="Home" component={Home} options={{header: () => null}} />
      <Tab.Screen
        name="Request"
        component={Request}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{header: () => null}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
