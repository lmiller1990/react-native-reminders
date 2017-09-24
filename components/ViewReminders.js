import React, {Component} from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import LocalStorage from '../utils/localStorage' 
import ReminderItem from './ReminderItem'

class ViewReminders extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<FlatList
					data={this.props.reminders} 
					renderItem={({item}) => 
						<ReminderItem 
							removeReminder={this.props.removeReminder} 
							reminder={item} />
					}
				/>
		)
	}
}

export default ViewReminders
