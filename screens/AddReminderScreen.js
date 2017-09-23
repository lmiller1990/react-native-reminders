import React, {Component} from 'react'
import {View, Button} from 'react-native'
import AddReminderItem from '../components/AddReminderItem'
import LoadData from '../components/LoadData'

class AddReminderScreen extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			title: 'New Reminder',
			headerRight: (
				<Button title={'Save'} onPress={() => navigation.navigate('Home')} />
			)
		}
	}

	render() {
		return (
			<View>
				<AddReminderItem />
				<LoadData />
			</View>
		)
	}
}

export default AddReminderScreen
