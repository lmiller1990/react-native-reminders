import React from 'react';
import { View, NavigatorIOS, StyleSheet } from 'react-native';
import ViewReminders from './components/ViewReminders'
import AddReminderItem from './components/AddReminderItem'

export default class App extends React.Component {
	_handleNavRequest() {
		this.refs.nav.push({
			component: AddReminderItem,
			title: 'New reminder'
		})
	}

  render() {
    return (
			<NavigatorIOS
				ref='nav'
				initialRoute={{
					component: ViewReminders,
					title: 'Reminders',
					rightButtonTitle: 'New',
					onRightButtonPress: () => this._handleNavRequest()
				}}
				style={{flex: 1}}
			/>
    );
  }
}
