import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LeaveManagement from '../../screens/LeaveManagement';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from '../BottomTab/BottomTabs';
import LeaveApplication from '../../screens/LeaveApplication';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottomtabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeaveManagement"
          component={LeaveManagement}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeaveApplication"
          component={LeaveApplication}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
