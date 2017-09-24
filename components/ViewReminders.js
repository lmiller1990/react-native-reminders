import React, {Component} from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import LocalStorage from '../utils/localStorage' 
import ReminderItem from './ReminderItem'

class ViewReminders extends Component {
	constructor() {
		super()
		this.localStorage = new LocalStorage()

		this.state = { reminders: [] }
	}

	componentDidMount() {
		console.log('Mount')
		this.localStorage.load('reminder')
		.then(res => this.setState({ reminders: res }))
	}

	render() {
		console.log('Rendering')
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
