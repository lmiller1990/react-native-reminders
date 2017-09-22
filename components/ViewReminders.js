import React, {Component} from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

import ReminderItem from './ReminderItem'

class ViewReminders extends Component {
	constructor(props) {
		super(props)
		console.log('props',props)

		this.state = {
			reminders: [
				{ key: 100, name: 'Watch a movie', date: new Date(2017, 1, 3) },
				{ key: 101, name: 'Go to the park', date: new Date(2017, 5, 6) },
			]
		}
	}

	render() {
		return (
			<FlatList
				data={this.state.reminders} 
				renderItem={({item}) => 
					<ReminderItem reminder={item} />
				}
			/>
		)
	}
}

export default ViewReminders
