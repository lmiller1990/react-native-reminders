import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'
import ListRemindersScreen from './screens/ListRemindersScreen'
import AddReminderScreen from './screens/AddReminderScreen'

export default StackNavigator({
	Home: { screen: ListRemindersScreen },
	AddReminder: { screen: AddReminderScreen }
})
