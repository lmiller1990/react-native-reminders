import React, {Component} from 'react'
import {View, Button} from 'react-native'

import ViewReminders from '../components/ViewReminders'

class ListRemindersScreen extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			title: 'Reminders',
			headerRight: (
				<Button title={'+'} onPress={() => navigation.navigate('AddReminder')} />
			)
		}
	}

	render() {
		return (
			<View>
				<ViewReminders />
			</View>
		)
	}
}

export default ListRemindersScreen
