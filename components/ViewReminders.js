import React, {Component} from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import LocalStorage from '../utils/localStorage' 
import ReminderItem from './ReminderItem'

class ViewReminders extends Component {

	render() {
		return (
			<FlatList
				data={this.props.reminders} 
				renderItem={({item}) => 
					<ReminderItem reminder={item} />
				}
			/>
		)
	}
}

export default ViewReminders
